<template>
    <AtLayoutVirgo>
        <AtHeading v-if="heading" v-bind="[{ config: cfg.heading }, heading]" />

        <AtSectionCrux
            v-if="tips && tips.items"
            v-bind="[{ config: cfg.tips }, tips]"
        />

        <AtSectionLynx
            v-if="caribbeanOffers && caribbeanOffers.items"
            v-bind="[{ config: cfg.caribbeanOffers }, caribbeanOffers]"
        />
    </AtLayoutVirgo>
</template>

<script>
    import AtLayoutVirgo from '@layouts/LayoutVirgo/LayoutVirgo'
    import AtHeading from '@components/Heading/Heading'
    import AtSectionCrux from '@components/SectionCrux/SectionCrux'
    import AtSectionLynx from '@components/SectionLynx/SectionLynx'

    export default {
        name: 'AtPageHydra',
        components: {
            AtHeading,
            AtLayoutVirgo,
            AtSectionCrux,
            AtSectionLynx
        },
        props: {
            heading: {
                type: Object,
                default: () => {}
            },
            tips: {
                type: Object,
                default: () => {}
            },
            caribbeanOffers: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    heading: {},
                    tips: {},
                    caribbeanOffers: {}
                }
            }
        }
    }
</script>
