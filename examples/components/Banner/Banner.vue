<template>
    <AtBanner v-bind="banner" />
</template>

<script>
    export default {
        data () {
            return {
                banner: {
                    picture: {
                        src: 'https://source.unsplash.com/random/1920x1080'
                    }
                }
            }
        }
    }
</script>
