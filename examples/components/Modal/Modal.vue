<template>
    <AtModal v-bind="AtModal" />
</template>

<script>
    export default {
        data () {
            return {
                AtModal: {
                    title: 'Modifica tu origen',
                    text: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    ]
                }
            }
        }
    }
</script>
