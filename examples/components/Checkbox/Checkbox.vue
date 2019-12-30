<template>
    <AtCheckbox v-bind="checkbox" />
</template>

<script>
    export default {
        data () {
            return {
                checkbox: {
                    name: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
