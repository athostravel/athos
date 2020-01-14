<template>
    <AtCardAries v-bind="atCardAries" />
</template>

<script>
    export default {
        data () {
            return {
                atCardAries: {
                    meta: 'Hotel Joya',
                    picture: {
                        src: 'https://source.unsplash.com/random/80x80',
                    },
                    price: {
                        inline: true,
                        text: 'Precio Medio',
                        value: '200'
                    },
                    category: {
                        icon: 'heart',
                        count: 5
                    }
                }
            }
        }
    }
</script>
