<template>
    <div class="c-albedo-layout">
        <div class="c-albedo-layout__inner">
            <component
                :is="item.component"
                v-for="item in items"
                :key="item.id"
                class="c-albedo-layout__item"
                v-bind="item"
            />
        </div>
    </div>
</template>

<script>
    import AtCardAries from '@components/CardAries/CardAries'

    export default {
        name: 'AtAlbedoLayout',
        components: {
            AtCardAries
        },
        props: {
            items: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                component: {
                    items: [
                    {
                        component: 'AtCardAries',
                        title: {
                            text: 'Hotel Joya',
                            tag: 'span'
                        },
                        image: {
                            src: 'https://source.unsplash.com/random/80x80'
                        },
                        price: {
                            value: '200',
                            text: 'Precio Medio'
                        }
                    }
                ]
                }
            }
        }
    }
</script>
