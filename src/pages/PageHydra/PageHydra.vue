<template>
    <AtLayoutVirgo>
        <AtHeading v-if="heading" v-bind="[{ config: cfg.heading }, heading]" />

        <AtSectionLynx
            v-if="caribbeanOffers && caribbeanOffers.items"
            v-bind="[{ config: cfg.caribbeanOffers }, caribbeanOffers]"
        />
    </AtLayoutVirgo>
</template>

<script>
    import AtLayoutVirgo from '@layouts/LayoutVirgo/LayoutVirgo'
    import AtHeading from '@components/Heading/Heading'
    import AtSectionLynx from '@components/SectionLynx/SectionLynx'

    export default {
        name: 'AtPageHydra',
        components: {
            AtHeading,
            AtLayoutVirgo,
            AtSectionLynx
        },
        props: {
            heading: {
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
                    caribbeanOffers: {}
                }
            }
        }
    }
</script>
