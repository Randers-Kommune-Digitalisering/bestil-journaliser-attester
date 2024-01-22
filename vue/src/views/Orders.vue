<script setup>
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue';
</script>

<template>

    <h2>Bestillinger</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Afventer behandling</template>

        <span class="paragraph"></span>
    </Content>

</template>