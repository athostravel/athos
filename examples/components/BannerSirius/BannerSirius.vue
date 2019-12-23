<template>
    <AtBannerSirius v-bind="bannerSirius" />
</template>

<script>
    export default {
        data () {
            return {
                bannerSirius: {
                    tag: 'a',
                    href: '#',
                    title: { text: 'Punta Cana y Playa Bávaro', background: true },
                    meta: { text: '9 días y 7 noches', background: true },
                    icons: [
                        { icon: 'heart', rounded: true, size: 'tiny' },
                        { icon: 'heart', rounded: true, size: 'tiny' }
                    ],
                    priceButton: {
                        price: {
                            text: 'Desde',
                            before: '499',
                            value: '300'
                        },
                        button: {
                            icon: 'angle-right'
                        }
                    },
                    banner: {
                        radius: true,
                        picture: {
                            src: 'https://source.unsplash.com/random/1920x1080'
                        }
                    }
                }
            }
        }
    }
</script>
