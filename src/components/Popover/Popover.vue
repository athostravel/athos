<template>
    <div>
        <div
            ref="basePopoverContent"
            class="base-popover"
            @click.stop="destroyPopover"
        >
            <slot />
        </div>
        <div
            ref="basePopoverOverlay"
            class="base-popover__overlay"
        />
    </div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'AtPopover',

        props: {
            popoverOptions: {
                type: Object,
                required: true
            }
        },

        data () {
            return {
                popperInstance: null
            }
        },
        mounted () {
            this.initPopper()
            this.updateOverlayPosition()
        },
        methods: {
            destroyPopover () {
                if (this.popperInstance) {
                    this.popperInstance.destroy()
                    this.popperInstance = null
                    this.$emit('closePopover')
                }
            },
            updateOverlayPosition () {
                const overlayElement = this.$refs.basePopoverOverlay
                const overlayPosition = overlayElement.getBoundingClientRect()

                overlayElement.style.transform = <code>translate(-${overlayPosition.x}px, -${overlayPosition.y
                }px)`</code>
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

                this.popperInstance = new Popper(
                    popoverReference,
                    this.$refs.basePopoverContent,
                    {
                        placement,
                        modifiers: {
                            ...modifiers,
                            preventOverflow: {
                                boundariesElement: 'viewport'
                            }
                        }
                    }
                )
            }

        }
    }
</script>
