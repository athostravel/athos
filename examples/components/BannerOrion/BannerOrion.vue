<template>
    <AtBannerOrion v-bind="AtBannerOrion" />
</template>

<script>
    export default {
        data () {
            return {
                AtBannerOrion: {
                    href: '#asdas',
                    title: 'Punta Cana y Playa Bávaro',
                    meta: '9 días y 7 noches',
                    video: '#',
                    image: {
                        src: 'https://source.unsplash.com/random/1920x1080'
                    },
                    price: {
                        value: '300'
                    }
                }
            }
        }
    }
</script>
