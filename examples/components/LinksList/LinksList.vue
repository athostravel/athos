<template>
    <AtLinksList v-bind="atLinksList" />
</template>

<script>
    export default {
        data () {
            return {
                atLinksList: {
                    items: [
                        {
                            href: 'http://www.avoristravel.com/',
                            text: 'Text Link #1'
                        },
                        {
                            href: 'http://www.avoristravel.com/',
                            text: 'Text Link #2'
                        },
                        {
                            href: 'http://www.avoristravel.com/',
                            text: 'Text Link #3'
                        }
                    ]
                }
            }
        }
    }
</script>
