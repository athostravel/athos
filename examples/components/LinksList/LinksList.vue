<template>
    <AtLinksList v-bind="atLinksList" />
</template>

<script>
    export default {
        data () {
            return {
                atLinksList: {
                    list: [{
                        link: {
                            href: 'http://www.avoristravel.com/',
                            target: '_blank'
                        }
                    }]
                }
            }
        }
    }
</script>
