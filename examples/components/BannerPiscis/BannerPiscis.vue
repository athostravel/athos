<template>
    <AtBannerPiscis v-bind="bannerPiscis" />
</template>

<script>
    export default {
        data () {
            return {
                bannerPiscis: {
                    title: {
                        text: 'Excursión por Thailandia'
                    },
                    banner: {
                        radius: true,
                        picture: {
                            src: 'https://source.unsplash.com/random/1080x1920'
                        }
                    },
                    textButton: 'Leer Más',
                    hrefButton: '#',
                    justifyContent: 'bottom',
                    alignContent: 'center',
                    overlayPosition: 'bottom'
                }
            }
        }
    }
</script>
