<template>
    <div>
        <AtRadio v-bind="radio" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio: {
                    name: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
