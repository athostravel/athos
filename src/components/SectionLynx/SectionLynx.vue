<template>
    <AtContainer v-bind="cfg.container">
        <AtSection v-bind="[cfg.section, { config: cfg.section, title, description }]">
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
            description: {
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
                    section: {},
                    tetris: {}
                }
            }
        }
    }
</script>
