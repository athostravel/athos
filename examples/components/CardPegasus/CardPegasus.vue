<template>
    <div>
        <AtCardPegasus v-bind="atCardPegasus" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atCardPegasus: {
                    tag: 'div',
                    href: '#',
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
                    price: {
                        before: '499',
                        value: '300'
                    }
                }
            }
        }
    }
</script>