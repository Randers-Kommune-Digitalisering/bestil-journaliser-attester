<script setup>
    import { ref, watch } from 'vue'
    import dayjs from 'dayjs'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const props = defineProps({
        attestType: {
            type: Number,
            required: true
        },
        attestSubType: {
            type: Number,
            required: false,
            default: -1
        },
        header: {
            type: String,
            required: false
        }
    })

    const attestType = ref(props.attestType)
    const attestSubType = ref(props.attestSubType)
    const typesChanged = ref([false, false])

    watch( () => props.attestType, (current, previous) => {
        typesChanged.value[0] = true
        attestType.value = current
        fetchOrders()
    })

    watch( () => props.attestSubType, (current, previous) => {
        typesChanged.value[1] = true
        attestSubType.value = current
        fetchOrders()
    })

    // Events

    const emit = defineEmits(['updateOrderCount', 'setOrderCount'])

    const callUpdate = () => {
        emit('updateOrderCount')
    }
    const callSetCount = (count) => {
        emit('setOrderCount', "Bestillinger", count)
    }

    // Fetch orders

    const orders = ref([])

    function fetchOrders(force = false)
    {
        if(!force)
        {
            if(!(typesChanged.value[0] && typesChanged.value[1]))
                return

            else
            {
                typesChanged.value = [false, false]
            }
        }

        fetch('/api/orders/' + attestType.value + '/' + attestSubType.value)
            .then(response => response = response.json())
            .then(value => orders.value = value)
            .then(value => callSetCount(value.length))
    }

    // Functions
    // Notification

    const notification = ref(null)

    function ordersProcessedNotification( count )
    {
        var attesterne = count > 1 ? "Attesterne" : "Attesten"
        var attester = count > 1 ? "attester" : "attest"

        return {
            "message": attesterne + " er blevet markeret som bestilt i systemet. Vær opmærksom på, at det er dit ansvar at " + attesterne.toLowerCase() + " er blevet bestilt korrekt. Status på igangværende bestillinger kan findes under Historik.",
            "title": count + " " + attester + " markeret som bestilt"
        }
    }

    // Flow

    var flowStep = ref(0)

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
        var ids = []
        orders.value.forEach(element => {
            ids.push( element.uid )
        })
        
        var idCount = ids.length
        var idList = ids.join()

        // Perform POST request to backend
        fetch('/api/data/orders/accept/' + idList)
        .then(response => console.log(response.json()))

        // Set orders = []
        orders.value = []
        callUpdate()

        // Set notification
        notification.value = ordersProcessedNotification(idCount)
    }

    function reject(item)
    {
        // Perform POST request to backend
        fetch('/api/data/orders/reject/' + item.uid)
        .then(response => console.log(response.json()))

        // Remove order from list
        orders.value = orders.value.filter(x => x !== item)
        callSetCount(-1)
    }

</script>

<template>

    <div v-if="notification" class="message" id="msg" style="margin-bottom: 2rem;">
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
        <template #heading>{{ props.header }} {{ attestType }} ({{ attestSubType }})</template>

        <span class="paragraph">Personer der søger ansættelse eller er ansat til at yde indsats i hendhold til §§ 83 og 85 i lov om social service, samt for personer der søger ansættelse eller er ansat ved tilbud, hvor der ydes en sådan indsats.</span>

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