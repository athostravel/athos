<template>
    <AtContainer v-bind="cfg.container">
        <AtSection v-bind="cfg.section">
            <AtText
                v-if="title"
                slot="title"
                v-bind="cfg.title"
            >
                {{ title }}
            </AtText>
            <AtTetris v-bind="{ config: cfg.tetris, items }" />
        </AtSection>
    </AtContainer>
</template>

<script>
    import AtContainer from '@components/Container/Container'
    import AtSection from '@components/Section/Section'
    import AtTetris from '@components/Tetris/Tetris'

    export default {
        name: 'AtSectionLynx',
        components: {
            AtContainer,
            AtSection,
            AtTetris
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    container: {},
                    section: {
                        border: 'bottom'
                    },
                    title: {
                        color: 'primary',
                        weight: 'bold',
                        size: 'coal',
                        align: 'center'
                    },
                    tetris: {}
                }
            }
        }
    }
</script>
