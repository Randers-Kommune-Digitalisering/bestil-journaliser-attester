<script setup>
    import { ref, watch } from 'vue'
    import dayjs from 'dayjs'
    import attestTyper from '@/assets/attestTypes.json'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const props = defineProps({
        attestTypes: {
            type: Array,
            required: true
        }
    })  /* attestTypes array: [attestType, attestSubType] */
    
    // Events

    const emit = defineEmits(['updateOrderCount', 'updateOrdersCount', 'setOrderCount'])

    /*const callUpdate = () => {
        emit('updateOrderCount')
    }*/
    const callUpdateOrders = () => {
        emit('updateOrdersCount')
    }
    const callSetCount = (count) => {
        emit('setOrderCount', count)
    }

    // Initialization

    const orders = ref([])
    var flowStep = ref(0)

    const attestType = ref(props.attestTypes[0])
    const attestSubType = ref(props.attestTypes[1])

    // Set text
    const header = ref(attestTyper.find(x => x.typeId == attestType.value && x.subTypeId == attestSubType.value).name)
    const description = ref(attestTyper.find(x => x.typeId == attestType.value && x.subTypeId == attestSubType.value).longDescription)

    watch( () => props.attestTypes, (current, previous) => {
        // Update on change type
        attestType.value = current[0]
        attestSubType.value = current[1]
        fetchOrders()
    })

    fetchOrders()

    // Fetch orders

    function fetchOrders()
    {
        // Set text
        header.value = attestTyper.find(x => x.typeId == attestType.value && x.subTypeId == attestSubType.value).name
        description.value = attestTyper.find(x => x.typeId == attestType.value && x.subTypeId == attestSubType.value).longDescription

        // Reset state
        flowStep.value = 0

        // Retrieve orders for type+subtype
        fetch('/api/orders/' + attestType.value + '/' + attestSubType.value)
            .then(response => response = response.json())
            .then(value => orders.value = value)
    }

    // Functions
    // Notification
    const notification = ref(null)

    function ordersProcessedNotification( count, isRejected = false )
    {
        if (isRejected)
            return {
                "message": " Attestrekvisitionen er blevet afvist. Rekvirent er blevet notificeret på mail.",
                "title": "Attestrekvisition afvist"
            }

        var attesterne = count > 1 ? "Attesterne" : "Attesten"
        var attester = count > 1 ? "attester" : "attest"

        return {
            "message": attesterne + " er blevet markeret som bestilt i systemet. Vær opmærksom på, at det er dit ansvar at " + attesterne.toLowerCase() + " er blevet bestilt korrekt. Status på igangværende bestillinger kan findes under Historik.",
            "title": count + " " + attester + " markeret som bestilt"
        }
    }

    // Flow

    function copyOrderList()
    {
        // Set flow step
        flowStep.value = 1

        // Join CPR to string
        var text = ""
        orders.value.forEach(element => {
            text += element.cpr + "\n"
        })
        
        // Then copy string to clipboard
        navigator.clipboard.writeText(text)
    }

    function openPolitiWebsite(skip = false)
    {
        // Set flow step
        flowStep.value = 2

        if(!skip)
            window.open("https://dsa.politi.dk/RequestPublic?style=PolitiDK", "_blank")
    }

    // Back-end interactions 

    function setAsOrdered()
    {
        // Reset flow step
        flowStep.value = 0

        // Obtain all ids from list
        var idList = []
        orders.value.forEach(element => {
            idList.push( element.uid )
        })
        
        var idCount = idList.length

        // Perform POST request to backend
        fetch('/api/processorders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(idList),
        })
        .then(response => console.log(response.json()))
        .then(callSetCount(-idCount))
        //.then(callUpdate())
        .then(callUpdateOrders()) 

        // Set orders = []
        .then(orders.value = [])

        // Set notification
        notification.value = ordersProcessedNotification(idCount)
    }

    function reject(item)
    {
        // Perform POST request to backend
        fetch('/api/rejectorder/' + item.uid, {
            method: "POST"
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(orders.value = orders.value.filter(x => x !== item))  // Remove order from list
        .then(callSetCount(-1))
        .then(callUpdateOrders())         
        
        // Set notification
        notification.value = ordersProcessedNotification(1, true)
    }

</script>

<template>

    <div v-if="notification" class="message green" id="msg" style="margin-bottom: 2rem;">
        <div class="header">
            {{ notification.title }}
            <span class="float-right close" @click="notification = null">x</span>
        </div>
        {{ notification.message }}
    </div>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>{{ header }}</template>

        <span class="paragraph">{{ description }}</span>

        <div class="paragraph">
            <table>
                <thead>
                    <tr>
                        <th>Dato <div class="text-small">Anmodet</div></th>
                        <th>Rekvirent <div class="text-small">Navn og mail-adresse</div></th>
                        <th>Rekvisitus <div class="text-small">CPR-nummer</div></th>
                        <th></th>
                    </tr>
                </thead>
                
                <tr v-if="orders.length > 0" v-for="order in orders">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.rekvirentNavn }} <div class="text-small">{{ order.rekvirentEmail }}</div></td>
                    <td>{{ order.cpr }}</td>
                    <td><button class="red" @click="reject(order)">Afvis</button></td>
                </tr>
                <tr v-else>
                    <td colspan="4">Der er ingen bestillinger at vise.</td>
                </tr>

            </table>
        </div>

    </Content>

    <Content v-if="orders.length > 0">
        <template #icon>

        </template>
        <template #heading>Bestil attester</template>

        <span class="paragraph">Følg nedenstående trin for at gennemføre bestilling af attesterne:</span>

        <div class="paragraph buttons">

            <button @click="copyOrderList()" :class="flowStep > 0 ? 'green' : ''">
                1) Kopier CPR-numre
            </button>

            <div>
                <button @click="openPolitiWebsite()"  :class="flowStep > 1 ? 'green' : ''" :disabled="flowStep < 1">
                    2) Bestil på Politiets hjemmeside
                </button>

                <div id="flow_2" :class="'center text-small' +  (flowStep != 1 ? ' displaynone' : '')">
                    <a @click="openPolitiWebsite(true)">Spring over</a>
                </div>
            </div>
            
            <button @click="setAsOrdered()" :disabled="flowStep < 2">
                3) Markér attester som bestilt
            </button>

        </div>
    </Content>
    

</template>

<style scoped>
    .message
    {
        margin-top: 1rem;
        color: var(--color-white)
    }

    .buttons
    {
        display: flex;
    }
    .buttons > :not(:last-child)
    {
        margin-right: 1rem;
    }
    
    a:hover
    {
        cursor:pointer;
    }
    .text-small
    {
        font-size: 0.6em;
        text-transform: uppercase;
    }
    .displaynone
    {
        display: none;
    }

    .anim
    {
        transition: 300ms;
        transform: scaleY(1);
        opacity: 1;
    }
    .hidden
    {
        max-height: 0rem;
        transform: scaleY(0) translateY(-60%);
        opacity: 0;
        overflow: hidden;
    }
</style>