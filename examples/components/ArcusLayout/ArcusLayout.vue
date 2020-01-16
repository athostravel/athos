<template>
    <div>
        <AtArcusLayout v-bind="conf" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                conf: {
                    component: 'AtCardLeo',
                    header: {
                        text: 'Ofertas a los mejores destinos',
                        tag: 'span'
                    },
                    items: [
                        {
                            cards: [
                                {
                                    tag: 'article',
                                    shadow: false,
                                    radius: true,
                                    map: {
                                        enabled: false
                                    },
                                    favourite: {
                                        enabled: true,
                                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                                        icon: { icon: 'heart' }
                                    },
                                    highlight: {
                                        text: 'Destacado',
                                        background: true,
                                        tag: 'span'
                                    },
                                    previous: {
                                        text: '9 días y 8 noches',
                                        tag: 'span'
                                    },
                                    meta: {
                                        text: 'Marruecos',
                                        tag: 'span'
                                    },
                                    text: {
                                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...',
                                        tag: 'span'
                                    },
                                    coverImage: true,
                                    picture: {
                                        title: 'Título',
                                        alt: 'Alt',
                                        src: 'https://source.unsplash.com/random/1920x1080',
                                        sources: [
                                            { srcset: 'https://source.unsplash.com/random/600x400', media: '480px' },
                                            { srcset: 'https://source.unsplash.com/random/320x200', media: '320px' }
                                        ]
                                    },
                                    title: {
                                        text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                                    },
                                    priceButton: {
                                        price: {
                                            text: 'Desde',
                                            before: '499',
                                            value: '300',
                                            href: '#'
                                        },
                                        button: {
                                            icon: 'angle-right'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            cards: [
                                {
                                    tag: 'article',
                                    shadow: false,
                                    radius: true,
                                    map: {
                                        enabled: false
                                    },
                                    favourite: {
                                        enabled: true,
                                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                                        icon: { icon: 'heart' }
                                    },
                                    highlight: {
                                        text: 'Destacado',
                                        background: true,
                                        tag: 'span'
                                    },
                                    previous: {
                                        text: '9 días y 8 noches',
                                        tag: 'span'
                                    },
                                    meta: {
                                        text: 'Marruecos',
                                        tag: 'span'
                                    },
                                    text: {
                                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...',
                                        tag: 'span'
                                    },
                                    coverImage: true,
                                    picture: {
                                        title: 'Título',
                                        alt: 'Alt',
                                        src: 'https://source.unsplash.com/random/1920x1080',
                                        sources: [
                                            { srcset: 'https://source.unsplash.com/random/600x400', media: '480px' },
                                            { srcset: 'https://source.unsplash.com/random/320x200', media: '320px' }
                                        ]
                                    },
                                    title: {
                                        text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                                    },
                                    priceButton: {
                                        price: {
                                            text: 'Desde',
                                            before: '499',
                                            value: '300',
                                            href: '#'
                                        },
                                        button: {
                                            icon: 'angle-right'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            cards: [
                                {
                                    tag: 'article',
                                    shadow: false,
                                    radius: true,
                                    map: {
                                        enabled: false
                                    },
                                    favourite: {
                                        enabled: true,
                                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                                        icon: { icon: 'heart' }
                                    },
                                    highlight: {
                                        text: 'Destacado',
                                        background: true,
                                        tag: 'span'
                                    },
                                    previous: {
                                        text: '9 días y 8 noches',
                                        tag: 'span'
                                    },
                                    meta: {
                                        text: 'Marruecos',
                                        tag: 'span'
                                    },
                                    text: {
                                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...',
                                        tag: 'span'
                                    },
                                    coverImage: true,
                                    picture: {
                                        title: 'Título',
                                        alt: 'Alt',
                                        src: 'https://source.unsplash.com/random/1920x1080',
                                        sources: [
                                            { srcset: 'https://source.unsplash.com/random/600x400', media: '480px' },
                                            { srcset: 'https://source.unsplash.com/random/320x200', media: '320px' }
                                        ]
                                    },
                                    title: {
                                        text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                                    },
                                    priceButton: {
                                        price: {
                                            text: 'Desde',
                                            before: '499',
                                            value: '300',
                                            href: '#'
                                        },
                                        button: {
                                            icon: 'angle-right'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            cards: [
                                {
                                    tag: 'article',
                                    shadow: false,
                                    radius: true,
                                    map: {
                                        enabled: false
                                    },
                                    favourite: {
                                        enabled: true,
                                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                                        icon: { icon: 'heart' }
                                    },
                                    highlight: {
                                        text: 'Destacado',
                                        background: true,
                                        tag: 'span'
                                    },
                                    previous: {
                                        text: '9 días y 8 noches',
                                        tag: 'span'
                                    },
                                    meta: {
                                        text: 'Marruecos',
                                        tag: 'span'
                                    },
                                    text: {
                                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...',
                                        tag: 'span'
                                    },
                                    coverImage: true,
                                    picture: {
                                        title: 'Título',
                                        alt: 'Alt',
                                        src: 'https://source.unsplash.com/random/1920x1080',
                                        sources: [
                                            { srcset: 'https://source.unsplash.com/random/600x400', media: '480px' },
                                            { srcset: 'https://source.unsplash.com/random/320x200', media: '320px' }
                                        ]
                                    },
                                    title: {
                                        text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                                    },
                                    priceButton: {
                                        price: {
                                            text: 'Desde',
                                            before: '499',
                                            value: '300',
                                            href: '#'
                                        },
                                        button: {
                                            icon: 'angle-right'
                                        }
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
