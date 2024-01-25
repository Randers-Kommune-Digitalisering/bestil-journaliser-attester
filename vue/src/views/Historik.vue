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
                        <th>Dato</th>
                        <th>Bestillingsansvarlig</th>
                        <th>Attest CPR</th>
                        <th>Type</th>
                    </tr>
                </thead>
                
                <tr v-if="orders.length > 0" v-for="order in orders">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.sagsbehandlerNavn }} <div class="text-small">{{ order.sagsbehandlerEmail }}</div></td>
                    <td>{{ order.cpr }}</td>
                    <td>{{ order.erStraffeattest ? "Straffeattest" : "Børneattest" }}</td>
                </tr>
                <tr v-else>
                    <td colspan="4">Der er ingen bestillinger at vise.</td>
                </tr>
            </table>
        </div>
    </Content>


    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Færdigbehandlet</template>

        <span class="paragraph">Herunder kan du se bestillinger som er færdigbehandlet.</span>

        <div class="paragraph">
            <table>
                <thead>
                    <tr>
                        <th>Dato</th>
                        <th>Bestillingsansvarlig</th>
                        <th>Attest CPR</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                <tr v-if="ordersFinished.length > 0" v-for="order in ordersFinished">
                    <td>{{ dayjs(order.bestillingModtaget).format("DD-MM-YYYY") }}</td>
                    <td>{{ order.sagsbehandlerNavn }} <div class="text-small">{{ order.sagsbehandlerEmail }}</div></td>
                    <td>{{ order.cpr }}</td>
                    <td>{{ order.erStraffeattest ? "Straffeattest" : "Børneattest" }}</td>
                    <td>{{ order.erAfvist ? "Afvist" : "Færdigbehandlet" }}</td>
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