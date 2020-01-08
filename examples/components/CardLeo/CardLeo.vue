<template>
    <AtCardLeo v-bind="cardLeo" />
</template>

<script>
    export default {
        data () {
            return {
                cardLeo: {
                    tag: 'article',
                    shadow: true,
                    radius: true,
                    icons: [
                        { icon: 'map', size: 'tiny' },
                        { icon: 'heart', size: 'tiny' }
                    ],
                    meta: {
                        text: 'Marruecos'
                    },
                    text: {
                        text: 'Visitando: Marrakech, Tifeltoute, Zagora, dunas de Erg Lihoudi...'
                    },
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
                            value: '300'
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