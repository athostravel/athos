<template>
    <AtFooter v-bind="atFooter" />
</template>

<script>
    export default {
        data () {
            return {
                atFooter: {
                    lists: [
                        {
                            links: [
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
                        },
                        {
                            links: [
                                {
                                    href: 'http://www.avoristravel.com/',
                                    text: 'Text Link #4'
                                },
                                {
                                    href: 'http://www.avoristravel.com/',
                                    text: 'Text Link #5'
                                },
                                {
                                    href: 'http://www.avoristravel.com/',
                                    text: 'Text Link #6'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
