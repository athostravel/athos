<template>
    <AtBanner v-bind="atBanner" />
</template>

<script>
    export default {
        data () {
            return {
                atBanner: {
                    atPicture: {
                        src: 'https://source.unsplash.com/random/1920x1080'
                    }
                }
            }
        }
    }
</script>
