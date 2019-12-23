<template>
    <AtPicture v-bind="picture" />
</template>

<script>
    export default {
        data () {
            return {
                picture: {
                    title: 'Titulo',
                    alt: 'Alt',
                    src: 'https://source.unsplash.com/random/1920x1080',
                    sources: [
                        { srcset: 'https://source.unsplash.com/random/600x400', media: '480px' },
                        { srcset: 'https://source.unsplash.com/random/320x200', media: '320px' }
                    ]
                }
            }
        }
    }
</script>
