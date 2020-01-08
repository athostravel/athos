<template>
    <AtPriceButton v-bind="atPriceButton" />
</template>

<script>
    export default {
        data () {
            return {
                atPriceButton: {
                    href: '#',
                    atPrice: {
                        before: '300',
                        value: '199'
                    }
                }
            }
        }
    }
</script>
