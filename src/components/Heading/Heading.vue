<template>
    <AtContainer v-bind="cfg.container">
        <AtSection v-bind="[cfg.section, { config: cfg.section, title, description }]" />
    </AtContainer>
</template>

<script>
    import AtContainer from '@components/Container/Container'
    import AtSection from '@components/Section/Section'

    export default {
        name: 'AtHeading',
        components: {
            AtContainer,
            AtSection
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            description: {
                type: [String, Array],
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    container: {},
                    section: {
                        title: {
                            color: 'secondary'
                        }
                    }
                }
            }
        }
    }
</script>
