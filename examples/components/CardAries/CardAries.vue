<template>
    <AtCardAries v-bind="atCardAries" />
</template>

<script>
    export default {
        data () {
            return {
                atCardAries: {
                    meta: 'Hotel Joya',
                    src: 'https://source.unsplash.com/random/80x80',
                    text: 'Precio Medio',
                    value: '200',
                    inline: true,
                    category: {
                        icon: 'heart',
                        count: 5
                    }
                }
            }
        }
    }
</script>
