<template>
    <AtSwitch v-bind="atSwitch" />
</template>

<script>
    export default {
        data () {
            return {
                atSwitch: {
                    id: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
