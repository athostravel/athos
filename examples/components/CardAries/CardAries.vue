<template>
    <AtCardAries v-bind="atCardAries" />
</template>

<script>
    export default {
        data () {
            return {
                atCardAries: {
                    inverse: false,
                    meta: 'Hotel Joya',
                    src: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo.png',
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
