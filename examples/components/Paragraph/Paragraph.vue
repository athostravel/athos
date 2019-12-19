<template>
    <AtParagraph v-bind="paragraph" />
</template>

<script>
    export default {
        data () {
            return {
                paragraph: {
                    text: 'Lorem ipsum dolor sit amet'
                }
            }
        }
    }
</script>
