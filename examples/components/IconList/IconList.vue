<template>
    <AtIconList v-bind="iconList" />
</template>

<script>
    export default {
        data () {
            return {
                iconList: {
                    icons: [
                        { icon: 'heart', flat: true, tag: 'span' },
                        { icon: 'heart', flat: true, tag: 'span' },
                        { icon: 'heart', flat: true, tag: 'span' }
                    ]
                }
            }
        }
    }
</script>
