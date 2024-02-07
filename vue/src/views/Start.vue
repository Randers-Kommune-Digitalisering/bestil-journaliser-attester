<script setup>
    import Content from '@/components/Content.vue'
    import Status from '@/components/Status.vue'

    import IconTable from '@/components/icons/IconTable.vue'
    import IconRSS from '@/components/icons/IconRSS.vue'

    
    // Events

    const emit = defineEmits(['updateOrderCount'])

    const callUpdate = () => {
        emit('updateOrderCount')
    }

    callUpdate()

    
</script>

<template>
    <h2>Attester</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Overblik</template>
        
        Kontrollér om der er modtaget nye attestanmodninger i menubjælken under hhv. "Straffeattester", og "Børneattester".
    </Content>

</template>