<template>
    <AtButton v-bind="button" />
</template>

<script>
    export default {
        data () {
            return {
                button: {
                    text: 'Button'
                }
            }
        }
    }
</script>
