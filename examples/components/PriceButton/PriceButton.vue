<template>
    <AtPriceButton v-bind="priceButton" />
</template>

<script>
    export default {
        data () {
            return {
                priceButton: {
                    tag: 'a',
                    price: {
                        text: 'Desde',
                        before: '300',
                        value: '199',
                        currency: '$',
                        inline: true

                    },
                    button: {
                        tag: 'div',
                        text: 'Ir'
                    }
                }
            }
        }
    }
</script>
