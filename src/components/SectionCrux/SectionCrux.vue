<template>
    <AtContainer v-bind="cfg.container">
        <AtSection v-bind="cfg.section">
            <AtTips v-bind="[cfg.tips, { config: cfg.tips, items }]" />
        </AtSection>
    </AtContainer>
</template>

<script>
    import AtContainer from '@components/Container/Container'
    import AtSection from '@components/Section/Section'
    import AtTips from '@components/Tips/Tips'

    export default {
        name: 'AtSectionCrux',
        components: {
            AtContainer,
            AtSection,
            AtTips
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    tips: {
                        horizontal: true,
                        gap: 'coal'
                    }
                }
            }
        }
    }
</script>
