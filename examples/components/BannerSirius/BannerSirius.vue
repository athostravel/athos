<template>
    <AtBannerSirius v-bind="bannerSirius"/>
</template>

<script>
    export default {
        data () {
            return {
                bannerSirius: {
                    tag: 'a',
                    href: 'https://www.google.es',
                    align: 'center',
                    valign: 'center',
                    title: {
                        text: 'Punta Cana y Playa Bávaro',
                        background: true
                    },
                    meta: {
                        text: '9 días y 7 noches',
                        background: true
                    },
                    price: {
                        text: 'desde',
                        before: '499',
                        value: '300'
                    },
                    icons: [
                        { icon: 'heart' },
                        { icon: 'heart' }
                    ],
                    button: {
                        text: 'go'
                    },
                    banner: {
                        overlay: false,
                        shadow: true,
                        radius: false
                    },
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
