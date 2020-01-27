<template>
    <AtDialogBox v-bind="atDialogBox" />
</template>

<script>
    export default {
        data () {
            return {
                atDialogBox: {
                    bordered: true
                }
            }
        }
    }
</script>
