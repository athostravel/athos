<template>
    <div>
        <AtCardLeo v-bind="simply" />
        <br>
        <br>
        <AtCardLeo v-bind="hasBackground" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                simply: {
                    tag: 'article',
                    shadow: true,
                    radius: true,
                    map: {
                        enabled: true,
                        button: { tag: 'button', rounded: false, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    },
                    favourite: {
                        enabled: true,
                        button: { tag: 'button', rounded: false, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    },
                    meta: {
                        text: 'Marruecos',
                        tag: 'span'
                    },
                    text: {
                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...',
                        tag: 'span'
                    },
                    coverImage: false,
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
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cupiditate eos esse natus perspiciatis placeat rerum tempore. A alias dignissimos illo quaerat? Aliquam cum minus neque officia saepe tempora.'
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
                },
                hasBackground: {
                    tag: 'article',
                    shadow: true,
                    radius: true,
                    map: {
                        enabled: false
                    },
                    favourite: {
                        enabled: true,
                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
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
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cupiditate eos esse natus perspiciatis placeat rerum tempore. A alias dignissimos illo quaerat? Aliquam cum minus neque officia saepe tempora.'
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
            }
        }
    }
</script>