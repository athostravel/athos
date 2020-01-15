<template>
    <AtCardAries v-bind="atCardAries" />
</template>

<script>
    export default {
        data () {
            return {
                atCardAries: {
                    title: {
                        text: 'Hotel Joya',
                        tag: 'span'
                    },
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
