<script setup>
    import { ref } from 'vue'
    import * as dayjs from 'dayjs'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    // Get orders

    const orders = ref([])

    fetch('/api/data/orders/ordered')
    .then(response => response = response.json())
    //.then(value => value = filterByType(value))
    .then(value => orders.value = value)

    

    const ordersFinished = ref([])

    fetch('/api/data/orders/finished')
    .then(response => response = response.json())
    //.then(value => value = filterByType(value))
    .then(value => ordersFinished.value = value)

    function returnOrderStatusColor(erAfvist)
    {
        if(erAfvist == 1)
            return "red"
        else 
            return ""
    }


</script>

<template>

    <h2>Historik</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Afventer modtagelse</template>

        <span class="paragraph">Herunder kan du se bestillinger som er bestilt, men afventer modtagelse fra Politiet.</span>

        <div class="paragraph">
            <table>
                <thead>
                    <tr>
                        <th>Dato <div class="text-small">Bestilt</div></th>
                        <th>Rekvirent <div class="text-small">Navn og mail-adresse</div></th>
                        <th>Rekvisitus <div class="text-small">CPR-nummer</div></th>
                        <th>Attest <div class="text-small">Type</div></th>
                        <th>Bestilt</th>
                    </tr>
                </thead>
                
                <tr v-if="orders.length > 0" v-for="order in orders">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.sagsbehandlerNavn }} <div class="text-small">{{ order.sagsbehandlerEmail }}</div></td>
                    <td>{{ order.cpr }}</td>
                    <td>{{ order.erStraffeattest ? "Straffeattest" : "Børneattest" }}</td>
                    <td>{{ dayjs(order.bestiltHosPoliti).format("DD-MM-YYYY") }}</td>
                </tr>
                <tr v-else>
                    <td colspan="5">Der er ingen bestillinger at vise.</td>
                </tr>
            </table>
        </div>
    </Content>


    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Færdigbehandlet</template>

        <span class="paragraph">Herunder kan du se de seneste 10 bestillinger som er færdigbehandlet.</span>

        <div class="paragraph">
            <table>
                <thead>
                    <tr>
                        <th>Dato <div class="text-small">Behandlet</div></th>
                        <th>Rekvirent <div class="text-small">Navn og mail-adresse</div></th>
                        <th>Rekvisitus <div class="text-small">CPR-nummer</div></th>
                        <th>Attest <div class="text-small">Type</div></th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                <tr v-if="ordersFinished.length > 0" v-for="order in ordersFinished">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.sagsbehandlerNavn }} <div class="text-small">{{ order.sagsbehandlerEmail }}</div></td>
                    <td>{{ order.cpr }}</td>
                    <td>{{ order.erStraffeattest ? "Straffeattest" : "Børneattest" }}</td>
                    <td><span :class="returnOrderStatusColor(order.erAfvist)">{{ order.erAfvist ? "Afvist" : "Færdigbehandlet" }}</span></td>
                </tr>
                <tr v-else>
                    <td colspan="5">Der er ingen bestillinger at vise.</td>
                </tr>
            </table>
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