<template>
    <AtText v-bind="atText" />
</template>

<script>
    export default {
        data () {
            return {
                atText: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            }
        }
    }
</script>
