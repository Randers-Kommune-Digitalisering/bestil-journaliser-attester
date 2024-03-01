<script setup>
    const props = defineProps({
        attestType: {
            type: String,
            required: true
    }
    })
    
    console.log("Attest-type: " + props.attestType)

    import { ref } from 'vue'
    import dayjs from 'dayjs'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const attestType = props.attestType
    const _attestType = attestType == "Straffeattest" ? "Straffeattest" : "Borneattest"
    const _attestHeaderTitle = attestType + 'er'


    const h2 = _attestHeaderTitle

    // Events

    const emit = defineEmits(['updateOrderCount', 'setOrderCount'])

    const callUpdate = () => {
        emit('updateOrderCount')
    }

    const callSetCount = (count) => {
        emit('setOrderCount', _attestHeaderTitle, count)
    }

    // Get orders

    callUpdate()

    const orders = ref([])

    fetch('/api/data/orders/type/' + _attestType)
    .then(response => response = response.json())
    //.then(value => value = filterByType(value))
    .then(value => orders.value = value)

    // Functions

    function copyOrderList()
    {
        // Join CPR to string
        var text = ""
        orders.value.forEach(element => {
            text += element.cpr + "\n"
        })

        // Copy string to clipboard
        navigator.clipboard.writeText(text)
    }

    function unlockButton(buttonId)
    {
        document.getElementById(buttonId).disabled = false
    }

    function setButtonGreen(buttonId)
    {
        document.getElementById(buttonId).classList.add("green")
    }

    function hide(id)
    {
        document.getElementById(id).classList.add("displaynone")
    }
    function display(id)
    {
        document.getElementById(id).classList.remove("displaynone")
    }

    function openPolitiWebsite()
    {
        window.open("https://dsa.politi.dk/RequestPublic?style=PolitiDK", "_blank")
    }

    function setAsOrdered()
    {
        // Obtain all ids from list
        var ids = []
        orders.value.forEach(element => {
            console.log("Found id:" + element.uid)
            ids.push( element.uid )
        })
        
        var idCount = ids.length
        var idList = ids.join()

        console.log("idList: '" + idList + "'")

        // Perform POST request to backend
        fetch('/api/data/orders/accept/' + idList)
        .then(response => console.log(response.json()))

        // Set orders = []
        orders.value = []
        callSetCount(0)
        notification.value = ordersProcessedNotification(idCount)
    }

    function reject(item)
    {
        // Perform POST request to backend
        fetch('/api/data/orders/reject/' + item.uid)
        .then(response => console.log(response.json()))
        //.then(callUpdate())

        // Remove order
        orders.value = orders.value.filter(x => x !== item)
        callSetCount(-1)
    }

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

</script>

<template>

    <div v-if="notification" class="message" id="msg" style="margin-bottom: 2rem;">
        <div class="header">
            {{ notification.title }}
            <span class="float-right close" @click="notification = null">x</span>
        </div>
        {{ notification.message }}
    </div>

    <h2>{{ h2 }}</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Afventer behandling</template>

        <span class="paragraph">Herunder kan du se bestillinger som afventer din behandling.</span>

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
        <template #heading>Bestil {{attestType.toLowerCase()}}attester</template>

        <span class="paragraph">Følg nedenstående trin for at gennemføre bestilling af {{attestType.toLowerCase()}}attesterne:</span>

        <div class="paragraph buttons">

            <button id="buttonAttest_1"
            @click="copyOrderList();unlockButton('buttonAttest_2');setButtonGreen('buttonAttest_1');display('aAttest_2')">
                1) Kopier CPR-numre
            </button>

            <div>
                <button id="buttonAttest_2" 
                @click="openPolitiWebsite();unlockButton('buttonAttest_3');setButtonGreen('buttonAttest_2');hide('aAttest_2')" disabled>
                    2) Bestil på Politiets hjemmeside
                </button>

                <div id="aAttest_2" class="center text-small displaynone">
                    <a @click="unlockButton('buttonAttest_3');setButtonGreen('buttonAttest_2');hide('aAttest_2')">Spring over</a>
                </div>
            </div>
            
            <button id="buttonAttest_3" 
            @click="setAsOrdered();setButtonGreen('buttonAttest_3')" disabled>3) Markér attester som bestilt</button>

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
</style>