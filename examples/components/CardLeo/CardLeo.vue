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
                    href: '#simply',
                    image: {
                        title: 'Título',
                        alt: 'Alt',
                        src: 'https://source.unsplash.com/random/1920x1080'
                    },
                    info: {
                        tag: 'div',
                        highlight: {
                            text: 'Destacado'
                        },
                        href: '#',
                        image: {
                            title: 'Título',
                            alt: 'Alt',
                            src: 'https://source.unsplash.com/random/1920x1080'
                        },
                        previous: {
                            text: '9 días y 8 noches'
                        },
                        meta: {
                            text: 'Marruecos'
                        },
                        text: {
                            text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...'
                        },
                        title: {
                            text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                        },
                        description: {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cupiditate eos esse natus perspiciatis placeat rerum tempore. A alias dignissimos illo quaerat? Aliquam cum minus neque officia saepe tempora.'
                        },
                        price: {
                            before: '499',
                            value: '300'
                        }
                    }
                },
                hasBackground: {
                    href: '#hasBackground',
                    image: {
                        title: 'Título',
                        alt: 'Alt',
                        src: 'https://source.unsplash.com/random/1920x1080'
                    },
                    info: {
                        headerTransparent: true,
                        tag: 'div',
                        highlight: {
                            text: 'Destacado'
                        },
                        href: '#',
                        image: {
                            title: 'Título',
                            alt: 'Alt',
                            src: 'https://source.unsplash.com/random/1920x1080'
                        },
                        previous: {
                            text: '9 días y 8 noches'
                        },
                        meta: {
                            text: 'Marruecos'
                        },
                        text: {
                            text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...'
                        },
                        title: {
                            text: 'Visita a Marruecos y alrededores (Puente de Diciembre)'
                        },
                        description: {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cupiditate eos esse natus perspiciatis placeat rerum tempore. A alias dignissimos illo quaerat? Aliquam cum minus neque officia saepe tempora.'
                        },
                        price: {
                            before: '499',
                            value: '300'
                        }
                    },
                    config: {
                        banner: {
                            filter: 'blur',
                            shadow: false
                        },
                        filterImage: {
                            enabled: true
                        }
                    }
                }
            }
        }
    }
</script>