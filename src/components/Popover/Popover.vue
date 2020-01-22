<template>
    <div>
        <div ref="basePopoverContent" class="base-popover">
            <slot />
        </div>
    </div>
</template>

<script>
    import { createPopper } from '@popperjs/core'

    export default {
        name: 'AtPopover',

        props: {
            popoverOptions: {
                type: Object,
                required: true
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
            this.initPopper()

            this.$root.$on('openPopover', ({ id }) => {
                console.log('eo')
                this.open()
            })
        },

        methods: {
            open () {
                this.show = true
            },
            initPopper () {
                const modifiers = {}
                const { popoverReference, offset, placement } = this.popoverOptions

                if (offset) {
                    modifiers.offset = {
                        offset
                    }
                }

                if (placement) {
                    modifiers.placement = placement
                }

                this.popperInstance = createPopper(
                    popoverReference,
                    this.$refs.basePopoverContent
                )
            },

            destroyPopover () {
                if (this.popperInstance) {
                    this.popperInstance.destroy()
                    this.popperInstance = null
                    this.$emit('closePopover')
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
  .base-popover {
    position: relative;
    z-index: 50;

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 40;
      width: 100%;
      height: 100vh;
    }
  }
</style>
