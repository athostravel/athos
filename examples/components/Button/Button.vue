<template>
    <div>
        <AtButton v-bind="button" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                button: {
                    href: '#',
                    text: 'Button'
                }
            }
        }
    }
</script>
