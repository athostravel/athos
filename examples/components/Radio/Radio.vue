<template>
    <div>
        <AtRadio v-bind="atRadio" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atRadio: {
                    name: 'example',
                    label: 'Lorem Ipsum'
                }
            }
        }
    }
</script>
