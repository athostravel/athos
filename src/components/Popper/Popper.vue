<template>
    <transition name="fade" @after-leave="destroyPopper">
        <div v-show="show" class="c-popper" :style="customSize">
            <div class="c-popper__content">
                <slot />
            </div>
        </div>
    </transition>
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
            },
            size: {
                type: Object,
                default: () => {}
            }
        },

        data () {
            return {
                show: false,
                popperInstance: null
            }
        },
        computed: {
            customSize () {
                const size = {}
                if (this.size && this.size.width) {
                    size['--c-popper-max-width'] = this.size.width
                    size['--c-popper-width'] = '100%'
                }
                if (this.size && this.size.height) {
                    size['--c-popper-max-heigth'] = this.size.height
                }
                return size
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
                    if (!this.popperInstance) {
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
            destroyPopper () {
                this.popperInstance.destroy()
                this.popperInstance = null
            }

        }
    }
</script>
<style lang="scss">

  .c-popper {
    --c-popper-width: auto;
    --c-popper-max-width: 100%;
    --c-popper-max-heigth: auto;

    width: var(--c-popper-width);
    max-height: var(--c-popper-max-heigth);
    max-width: var(--c-popper-max-width);

    &__content {
      overflow-y: auto;
      width: var(--c-popper-width);
      max-height: var(--c-popper-max-heigth);
      max-width: var(--c-popper-max-width);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
