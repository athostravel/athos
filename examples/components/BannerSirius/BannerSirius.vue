<template>
    <AtBannerSirius v-bind="atBannerSirius" />
</template>

<script>
    export default {
        data () {
            return {
                atBannerSirius: {
                    title: { text: 'Punta Cana y Playa Bávaro' },
                    meta: { text: '9 días y 7 noches' },
                    icons: [
                        { atButton: { href: '#' } },
                        { atButton: { href: '#' } }
                    ],
                    atPriceButton: {
                        href: '#',
                        atPrice: {
                            before: '499',
                            value: '300'
                        }
                    },
                    atBanner: {
                        atPicture: {
                            src: 'https://source.unsplash.com/random/1920x1080'
                        }
                    }
                }
            }
        }
    }
</script>
