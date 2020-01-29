<template>
    <div class="preview-items">
        <AtLinksList v-bind="list" />
        <AtLinksList v-bind="listCenter" />
        <AtLinksList v-bind="listRight" />
        <AtLinksList v-bind="listSymbol" />
        <AtLinksList v-bind="listNoSymbol" />
        <AtLinksList v-bind="listVertical" />
        <AtLinksList v-bind="listVerticalDecoration" />
        <AtLinksList v-bind="listVerticalNoSymbol" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: {
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
                },
                listCenter: {
                    position: 'center',
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
                },
                listRight: {
                    position: 'right',
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
                },
                listNoSymbol: {
                    symbol: false,
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
                },
                listSymbol: {
                    symbol: '/',
                    symbolColor: 'primary',
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
                },
                listVertical: {
                    vertical: true,
                    symbol: '-',
                    config: {
                        border: {
                            position: 'bottom',
                            color: 'secondary'
                        },
                        link: {
                          color: 'secondary'
                        }
                    },
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
                },
                listVerticalDecoration: {
                    vertical: true,
                    symbol: '·',
                    symbolColor: 'primary',
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
                },
                listVerticalNoSymbol: {
                    vertical: true,
                    symbol: false,
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
