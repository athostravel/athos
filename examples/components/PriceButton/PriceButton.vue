<template>
    <div class="preview-items-horizontal">
        <AtPriceButton v-bind="atPriceButton">
            Ver oferta
        </AtPriceButton>
        <AtPriceButton v-bind="atPriceButton">
            <Icon v-bind="atPriceButton" />
        </AtPriceButton>
    </div>
</template>

<script>
    import Icon from '@components/Icon/Icon'
    export default {
        components: {
            Icon
        },
        data () {
            return {
                atPriceButton: {
                    href: '#',
                    before: '300',
                    value: '199',
                    icon: 'angle-right'
                }
            }
        }
    }
</script>
