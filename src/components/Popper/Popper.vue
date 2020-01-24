<template>
    <div v-show="show">
        <slot />
    </div>
</template>

<script>

    import { createPopper } from '@popperjs/core'

    export default {
        name: 'AtPopper',
        props: {
            id: {
                type: String,
                default: undefined
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            offset: {
                type: Array,
                default: () => [0, 5]
            },
            opened: {
                type: Boolean,
                default: false
            }
        },

        data () {
            return {
                show: false,
                popperInstance: null
            }
        },

        mounted () {
            if (this.opened) {
                this.open(this.id)
            }

            this.$root.$on('togglePopper', ({ id, trigger }) => {
                this.togglePopper(id, trigger)
            })
        },

        methods: {
            togglePopper (id, trigger) {
                if (id === this.id) {
                    this.show = !this.show
                    if (this.popperInstance) {
                        this.destroyPopper()
                    } else {
                        this.popperInstance = createPopper(
                            trigger,
                            this.$el, {
                                placement: this.placement,
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: this.offset
                                        }
                                    }
                                ]
                            }
                        )
                    }
                }
            },
            onClose  () {
                console.log('close')
            },
            destroyPopper () {
                this.popperInstance.destroy()
                this.popperInstance = null
            }

        }
    }
</script>
