<script setup>
    import { ref } from 'vue'
    
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


    // Demo

    const sampleData = ref({
        'dq': 'DQA1234',
        'cpr': '1234567890',
        'types': [false, false, false],
        'subtypes': [
                        [false, false, false, false],
                        [],
                        [false, false]
                    ]
    })

    const sampleOrders = ref([

    ])

    const addDataSample = () => {
        fetch('/api/adddemoorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sampleData.value)
        })
        .then(response => response.json())
    }

    
</script>

<template>
    <h2>Attestrekvisition</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Overblik</template>
        
        Kontrollér om der er modtaget nye attestanmodninger i menubjælken under "Bestillinger". Du kan kontrollere status på igangværende bestilinger under "Historik".
    </Content>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Demo</template>
        
        Herunder findes funktionalitet til at afprøve systemet i demo-tilstand. 

        <br /><br />
        <div style="font-weight: 500;font-size: 1.2em;margin-bottom: 1rem;">Indsæt bestilling / Modtag attest</div>
        <form @submit.prevent="">
            <fieldset>
                <div class="flexbox">

                    <div>
                        <label for="f_dq">Rekvirent DQ-nr.</label>
                        <input type="text" placeholder="..." id="f_dq" v-model="sampleData['dq']" required>
                    </div>  
                    
                    <div>
                        <label for="f_cpr">Rekvisitus CPR-nr.</label>
                        <input type="text" placeholder="..." id="f_cpr" v-model="sampleData['cpr']" required>
                    </div>  

                    <div>
                        <label for="f_type">Attesttype(r)</label>

                        <input type="checkbox" id="f_type_0" name="Zero" value="Zero" v-model="sampleData.types[0]">
                        <label for="f_type_0">Offentlig straffeattest</label> <br />
                        <input type="checkbox" id="f_type_1" name="One" value="One" v-model="sampleData.types[1]">
                        <label for="f_type_1">Privat straffeattest</label> <br />
                        <input type="checkbox" id="f_type_2" name="Two" value="Two" v-model="sampleData.types[2]">
                        <label for="f_type_2">Børneattest</label>
                    </div>

                    <div v-if="sampleData.types[0]">
                        <label for="f_type">Undertype(r) - Offentlig straffeattest</label>

                        <input type="checkbox" id="f_type_0_0" name="ZeroSubZero" value="ZeroSubZero" v-model="sampleData.subtypes[0][0]">
                        <label for="f_type_0_0">Ansættelse i sociale servicefag</label> <br />
                        <input type="checkbox" id="f_type_0_1" name="ZeroSubOne" value="ZeroSubOne" v-model="sampleData.subtypes[0][1]">
                        <label for="f_type_0_1">Ansættelse i folkeskolen</label> <br />
                        <input type="checkbox" id="f_type_0_2" name="ZeroSubTwo" value="ZeroSubTwo" v-model="sampleData.subtypes[0][2]">
                        <label for="f_type_0_2">Ansættelse som personlig hjælper</label> <br />
                        <input type="checkbox" id="f_type_0_3" name="ZeroSubThree" value="ZeroSubThree" v-model="sampleData.subtypes[0][3]">
                        <label for="f_type_0_3">Ansættelse ved dagtilbud for børn/unge</label> <br />
                    </div>

                    
                    <div v-if="sampleData.types[2]">
                        <label for="f_type">Undertype(r) - Børneattest</label>

                        <input type="checkbox" id="f_type_2_0" name="OneSubZero" value="ZeroSubZero" v-model="sampleData.subtypes[2][0]">
                        <label for="f_type_2_0">Ansættelse i børnefagligt område</label> <br />
                        <input type="checkbox" id="f_type_2_1" name="OneSubOne" value="ZeroSubOne" v-model="sampleData.subtypes[2][1]">
                        <label for="f_type_2_1">Pårørende til ansat i børnefagligt område</label> <br />
                    </div>



                </div>

                <button @click="addDataSample()">Indsæt bestilling</button>
                <button class="blue">Modtag attest</button>
                
            </fieldset>
        </form>
    </Content>

</template>