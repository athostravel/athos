<template>
    <AtPrice v-bind="price" />
</template>

<script>
    export default {
        data () {
            return {
                price: {
                    text: 'Desde',
                    before: '300',
                    value: '199',
                    currency: '$',
                    inline: true
                }
            }
        }
    }
</script>
