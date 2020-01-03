<template>
    <AtToggle v-bind="toggleTarget" />
</template>

<script>
    export default {
        data () {
            return {
                toggleTarget: {
                    toggleTrigger: '#myButton',
                    toggleTriggerClass: 'is-active',
                    toggleClass: 'is-active',
                    toggleEvent: 'click'
                }
            }
        }
    }
</script>
