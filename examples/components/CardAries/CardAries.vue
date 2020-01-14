<template>
    <AtCardAries v-bind="atCardAries" />
</template>

<script>
    export default {
        data () {
            return {
                atCardAries: {
                    title: 'Hotel Joya',
                    image: {
                        src: 'https://source.unsplash.com/random/80x80'
                    },
                    price: {
                        value: '200',
                        text: 'Precio Medio'
                    },
                    category: {
                        count: 3
                    }
                }
            }
        }
    }
</script>
