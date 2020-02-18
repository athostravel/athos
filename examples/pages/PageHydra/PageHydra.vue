<template>
    <AtPageHydra v-bind="model" />
</template>

<script>
    export default {
        data () {
            return {
                model: {
                    heading: {
                        title: 'Las mejores ofertas en hoteles, vuelos, paquetes y vacaciones',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempora mollitia accusantium assumenda quibusdam temporibus molestiae dicta corporis quos reprehenderit'
                    },
                    tips: {
                        items: [
                            {
                                icon: 'grid',
                                title: '15 años de Experiencia',
                                description: 'En internet para que tu compra sea comoda y segura'
                            },
                            {
                                icon: 'grid',
                                title: '15 años de Experiencia',
                                description: 'En internet para que tu compra sea comoda y segura'
                            },
                            {
                                icon: 'grid',
                                title: '15 años de Experiencia',
                                description: 'En internet para que tu compra sea comoda y segura'
                            }
                        ]
                    },
                    caribbeanOffers: {
                        title: 'Descubre las mejores ofertas',
                        items: [
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            },
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            },
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            },
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            },
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            },
                            {
                                href: '#asdas',
                                title: 'Punta Cana y Playa Bávaro',
                                meta: '9 días y 7 noches',
                                video: '#',
                                image: {
                                    src: 'https://source.unsplash.com/random/1920x1080'
                                },
                                price: {
                                    before: '499',
                                    value: '300'
                                }
                            }
                        ]
                    },
                    hotelsOffers: {
                        title: 'Ofertas a los mejores destinos',
                        items: [
                            {
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
                            },
                            {
                                title: 'Hoteles en Oropesa del Mar',
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
                            },
                            {
                                title: 'Hoteles en Marbella',
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
                        ]
                    }
                }
            }
        }
    }
</script>
