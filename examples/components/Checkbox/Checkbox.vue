<template>
    <AtCheckbox v-bind="atCheckbox" />
</template>

<script>
    export default {
        data () {
            return {
                atCheckbox: {
                    name: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
