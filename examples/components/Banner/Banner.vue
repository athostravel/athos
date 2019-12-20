<template>
    <AtBanner v-bind="banner"/>
</template>

<script>
    export default {
        data () {
            return {
                banner: {
                    tag: 'a',
                    href: 'https://www.google.es',
                    align: 'center',
                    valign: 'center',
                    shadow: true,
                    radius: true,
                    overlay: true,
                    picture: {
                        src: 'https://source.unsplash.com/random/1920x1080',
                        sources: [
                            {
                                srcset: 'https://source.unsplash.com/random/992x768',
                                media: '992px'
                            },
                            {
                                srcset: 'https://source.unsplash.com/random/600x400',
                                media: '480px'
                            },
                            {
                                srcset: 'https://source.unsplash.com/random/320x200',
                                media: '320px'
                            }
                        ]
                    }
                }
            }
        }
    }
</script>
