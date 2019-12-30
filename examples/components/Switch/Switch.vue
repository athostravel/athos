<template>
    <AtSwitch v-bind="example" />
</template>

<script>
    export default {
        data () {
            return {
                example: {
                    id: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
