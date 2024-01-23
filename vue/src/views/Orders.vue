<script setup>
    import { ref } from 'vue'
    import * as dayjs from 'dayjs'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const attestType = ref("")

    // Set attestType from URL
    var urlSplit = new URL(location.href).pathname.split("/")
    attestType.value = urlSplit[urlSplit.length-1]

    console.log(attestType.value)

    const h2 = attestType.value == "straffeattest" ? "Straffeattester" : "Børneattester"

    // Get orders

    const orders = ref([])

    fetch('/api/data/orders')
    .then(response => response = response.json())
    .then(value => value = filterByType(value))
    .then(value => orders.value = value)

    // Functions

    function filterByType(orderList)
    {
        if(attestType.value != "straffeattest" && attestType.value != "borneattest")
            return orderList;

        else if(attestType.value == "straffeattest")
            return orderList.filter(x => x.erStraffeattest == 1)

        else if(attestType.value == "borneattest")
            return orderList.filter(x => x.erStraffeattest == 1)
    }

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

    function openPolitiWebsite()
    {
        window.open("https://dsa.politi.dk/RequestPublic?style=PolitiDK", "_blank");
    }

    function setAsOrdered()
    {
        // Perform POST request to backend
        // Set orders = []
        orders.value = []
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
                    <td><button class="red">Afvis</button></td>
                </tr>
                <tr v-else>
                    <td colspan="4">Der er ingen bestillinger at vise.</td>
                </tr>
            </table>
        </div>
    </Content>

    <Content>
        <template #icon>

        </template>
        <template #heading>Bestil attester</template>

        <span class="paragraph">Følg nedenstående trin for at gennemføre bestilling af attesterne:</span>

        <div class="paragraph buttons">

            <button id="buttonAttest_1"
            @click="copyOrderList();unlockButton('buttonAttest_2');setButtonGreen('buttonAttest_1')">
                1) Kopier CPR-numre
            </button>

            <button id="buttonAttest_2" 
            @click="openPolitiWebsite();unlockButton('buttonAttest_3');setButtonGreen('buttonAttest_2')" disabled>
                2) Bestil på Politiets hjemmeside
            </button>
            
            <button id="buttonAttest_3" 
            @click="setAsOrdered();setButtonGreen('buttonAttest_3')" disabled>3) Markér attester som bestilt</button>

        </div>
    </Content>
    

</template>

<style scoped>
    .buttons > :not(:last-child)
    {
        margin-right: 1rem;
    }

    .text-small
    {
        font-size: 0.6em;
        text-transform: uppercase;
    }
</style>