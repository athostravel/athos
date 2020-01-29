<template>
    <AtListAries v-bind="example" />
</template>

<script>
    export default {
        data () {
            return {
                example: {
                    title: 'Hoteles en Benidorm',
                    items: [
                        {
                            title: 'Hotel Joya',
                            image: {
                                src: 'https://source.unsplash.com/random/80x80'
                            },
                            price: {
                                value: '200',
                                text: 'Precio Medio'
                            },
                            quality: {
                                icon: 'heart',
                                count: 3
                            }
                        },
                        {
                            title: 'Hotel Joya',
                            image: {
                                src: 'https://source.unsplash.com/random/80x80'
                            },
                            price: {
                                value: '200',
                                text: 'Precio Medio'
                            },
                            quality: {
                                icon: 'heart',
                                count: 3
                            }
                        },
                        {
                            title: 'Hotel Joya',
                            image: {
                                src: 'https://source.unsplash.com/random/80x80'
                            },
                            price: {
                                value: '200',
                                text: 'Precio Medio'
                            },
                            quality: {
                                icon: 'heart',
                                count: 3
                            }
                        }, {
                            title: 'Hotel Joya',
                            image: {
                                src: 'https://source.unsplash.com/random/80x80'
                            },
                            price: {
                                value: '200',
                                text: 'Precio Medio'
                            },
                            quality: {
                                icon: 'heart',
                                count: 3
                            }
                        },
                        {
                            title: 'Hotel Joya',
                            image: {
                                src: 'https://source.unsplash.com/random/80x80'
                            },
                            price: {
                                value: '200',
                                text: 'Precio Medio'
                            },
                            quality: {
                                icon: 'heart',
                                count: 3
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
