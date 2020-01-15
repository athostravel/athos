<template>
    <AtPrice v-bind="atPrice" />
</template>

<script>
    export default {
        data () {
            return {
                atPrice: {
                    text: 'Desde',
                    before: '300',
                    value: '199',
                    currency: '€'
                }
            }
        }
    }
</script>
