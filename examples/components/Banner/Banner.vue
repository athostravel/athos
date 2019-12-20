<template>
    <AtBanner :picture="picture" />
</template>

<script>
    export default {
        data () {
            return {
                picture: {
                    src: 'https://source.unsplash.com/random/1920x1080'
                }
            }
        }
    }
</script>
