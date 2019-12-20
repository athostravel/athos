<template>
    <AtIconList v-bind="iconList" />
</template>

<script>
    export default {
        data () {
            return {
                iconList: {
                    icons: [
                        { icon: 'heart' },
                        { icon: 'heart' },
                        { icon: 'heart' }
                    ]
                }
            }
        }
    }
</script>
