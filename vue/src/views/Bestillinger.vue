<script>
    const attestTyper = [
        {
            "name": "Offentlig straffeattest",
            "description": "Ansættelse i sociale servicefag",
            "typeId": 0,
            "subTypeId": 0,
            "count": 0
        },
        {
            "name": "Offentlig straffeattest",
            "description": "Ansættelse i folkeskolen",
            "typeId": 0,
            "subTypeId": 1,
            "count": 0
        },
        {
            "name": "Offentlig straffeattest",
            "description": "Ansættelse som personlig hjælper",
            "typeId": 0,
            "subTypeId": 2,
            "count": 0
        },
        {
            "name": "Offentlig straffeattest",
            "description": "Ansættelse ved dagtilbud for børn/unge",
            "typeId": 0,
            "subTypeId": 3,
            "count": 0
        },
        {
            "name": "Privat straffeattest",
            "description": "",
            "typeId": 1,
            "subTypeId": -1,
            "count": 0
        },
        {
            "name": "Børneattest",
            "description": "Ansættelse i børnefagligt område",
            "typeId": 2,
            "subTypeId": 0,
            "count": 1
        },
        {
            "name": "Børneattest",
            "description": "Pårørende til ansat i børnefagligt område",
            "typeId": 2,
            "subTypeId": 1,
            "count": 0
        }
    ]
</script>
<script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import Attester from '@/components/Attester.vue'

    const selectedType = ref(null)
    const selectedSubType = ref(null)

    function setAttestType(typeUid, subTypeUid = -1)
    {
        selectedType.value = typeUid
        selectedSubType.value = subTypeUid
    }
</script>

<template>

    <h2>Bestillinger</h2>

    <Content>
    <div class="buttonArray">

        <button
            v-for="attestType in attestTyper"
            :class="!(selectedType == attestType.typeId && selectedSubType == attestType.subTypeId) ? 'gray' : ''"
            @click="setAttestType(attestType.typeId, attestType.subTypeId)">

            <div class="content">
                <div class="count" v-if="attestType.count > 0">{{attestType.count}}</div>
                <div class="text">
                    {{ attestType.name }}

                    <div class="sub">
                        {{ attestType.description }}
                    </div>
                </div>
            </div>

        </button>
        
    </div>
    </Content>

    <Attester v-if="selectedType != null && selectedSubType != null"
              :attestType="selectedType"
              :attestSubType="selectedSubType"
              :header="attestTyper[selectedType].name"
              :description="attestTyper[selectedType].description"></Attester>
    
</template>

<style scoped>
    .buttonArray {
        display:flex;
        flex-wrap:wrap;
        gap: 0.5rem;
    }
    button {
        height: 8rem;
        width: 19rem;
        font-size: 0.9em;

        font-weight: 300;
        text-transform: unset;
        line-height: normal;

        padding: 0rem;
        margin: 0rem;
    }
        button .content
        {
            position:relative;
            height: 100%;
        }
            button .content .count
            {
                position: absolute;
                padding: 0.3rem 0.6rem;
                border-bottom-right-radius: 0.5rem;
                left: 0rem;
                top: 0rem;
                background-color: #00000018;
            }
            button .content .text
            {
                position:relative;
                text-wrap: wrap;
                top: 50%;
                transform: translate(0, -50%);
                padding: 0rem 0.5rem;
            }
            button .content .sub
            {
                max-width: 100%;
                text-wrap: wrap;
                font-size: 0.7em;
                margin-top: 1rem;
                padding: 0rem 0.5rem;
            }
        button.gray
        {
            background-color: var(--color-border-dark);
        }
        button.gray:hover
        {
            background-color: var(--color-border);
        }
</style>