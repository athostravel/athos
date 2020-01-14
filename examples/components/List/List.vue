<template>
    <AtList v-bind="AtList" />
</template>

<script>
    export default {
        data () {
            return {
                AtList: {
                    component: 'AtIcon',
                    vertical: false,
                    items: [
                        {
                            icon: 'angle-right'
                        },
                        {
                            icon: 'heart'
                        }
                    ]
                }
            }
        }
    }
</script>
