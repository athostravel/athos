<template>
    <AtCardIcon v-bind="cardIcon" />
</template>

<script>
    export default {
        data () {
            return {
                cardIcon: {
                    icon: 'phone',
                    title: 'Lorem ipsum',
                    text: 'Lorem ipsum',
                    align: 'left'
                }
            }
        }
    }
</script>
