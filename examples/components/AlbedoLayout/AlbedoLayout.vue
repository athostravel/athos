<template>
    <div>
        <AtAlbedoLayout v-bind="conf" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                conf: {
                    component: 'AtCardAries',
                    header: {
                        text: 'Ofertas a los mejores destinos',
                        tag: 'span'
                    },
                    items: [
                        {
                            title: {
                                text: 'Hoteles en Benidorm',
                                tag: 'span'
                            },
                            cards: [
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Joya',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '231',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                }
                            ]
                        },
                        {
                            title: {
                                text: 'Hoteles en Oropesa del Mar',
                                tag: 'span'
                            },
                            cards: [
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Joya',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '231',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                }
                            ]
                        },
                        {
                            title: {
                                text: 'Hoteles en Marbella',
                                tag: 'span'
                            },
                            cards: [
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Joya',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '231',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                },
                                {
                                    title: {
                                        text: 'Hotel Carlos I',
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
                                },
                                {
                                    title: {
                                        text: 'Hotel Cuco',
                                        tag: 'span'
                                    },
                                    image: {
                                        src: 'https://source.unsplash.com/random/80x80'
                                    },
                                    price: {
                                        value: '321',
                                        text: 'Precio Medio'
                                    },
                                    category: {
                                        count: 3
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
