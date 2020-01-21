<template>
    <AtSwitchOrion v-bind="atSwitchOrion" />
</template>

<script>
    export default {
        data () {
            return {
                atSwitchOrion: {
                    input: {
                        id: 'example'
                    }
                }
            }
        }
    }
</script>
