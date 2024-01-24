<script setup>
    import { ref } from 'vue'
    import * as dayjs from 'dayjs'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const attestType = ref("Straffeattest")
    const _attestType = attestType.value == "Straffeattest" ? "Straffeattest" : "Borneattest"


    const h2 = attestType.value == "Straffeattest" ? "Straffeattester" : "Børneattester"


    // Get orders

    const orders = ref([])

    fetch('/api/data/orders/' + _attestType)
    .then(response => response = response.json())
    //.then(value => value = filterByType(value))
    .then(value => orders.value = value)

    // Functions

    /*
    function filterByType(orderList)
    {
        if(attestType.value != "Straffeattest" && attestType.value != "Børneattest")
            return orderList;

        else if(attestType.value == "Straffeattest")
            return orderList.filter(x => x.erStraffeattest == 1)

        else if(attestType.value == "Børneattest")
            return orderList.filter(x => x.erBorneattest == 1)
    }*/

    function copyOrderList()
    {
        // Join CPR to string
        var text = ""
        orders.value.forEach(element => {
            text += element.cpr + "\n"
        });

        // Copy string to clipboard
        navigator.clipboard.writeText(text);
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
        window.open("https://dsa.politi.dk/RequestPublic?style=PolitiDK", "_blank");
    }

    function setAsOrdered()
    {
        // Perform POST request to backend
        fetch('/api/data/orders/accept/' + attestType.value)
        .then(response => console.log(response.json()))

        // Set orders = []
        orders.value = []
    }

    function reject(item)
    {
        console.log("uid: "+  item)

        // Perform POST request to backend
        fetch('/api/data/orders/reject/' + item.uid)
        .then(response => console.log(response.json()))

        // Set orders = []
        //let del = delete orders.value [ orders.value.findIndex[x => x.uid = uid] ]
        orders.value = orders.value.filter(x => x !== item)
    }

</script>

<template>

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
                        <th>Dato</th>
                        <th>Bestillingsansvarlig</th>
                        <th>Attest CPR</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tr v-if="orders.length > 0" v-for="order in orders">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.sagsbehandlerNavn }} <div class="text-small">{{ order.sagsbehandlerEmail }}</div></td>
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