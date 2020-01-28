<template>
    <AtLayoutVirgo>
        <AtSectionLynx
            v-if="caribbeanOffers && caribbeanOffers.items"
            v-bind="[{ config: cfg.caribbeanOffers }, caribbeanOffers]"
        />
    </AtLayoutVirgo>
</template>

<script>
    import AtLayoutVirgo from '@layouts/LayoutVirgo/LayoutVirgo'
    import AtSectionLynx from '@components/SectionLynx/SectionLynx'

    export default {
        name: 'AtPageHydra',
        components: {
            AtLayoutVirgo,
            AtSectionLynx
        },
        props: {
            caribbeanOffers: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
