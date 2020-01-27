<template>
    <AtPopper v-bind="popper">
        <AtDialogBox v-bind="options" :style="customSize">
            <slot />
        </AtDialogBox>
    </AtPopper>
</template>

<script>
    import AtDialogBox from '@components/DialogBox/DialogBox'
    import AtPopper from '@components/Popper/Popper'
    export default {
        name: 'AtPopover',
        components: {
            AtPopper,
            AtDialogBox
        },
        props: {
            popper: {
                type: Object,
                default: () => {}
            },
            arrow: {
                type: Boolean,
                default: false
            },
            close: {
                type: Boolean,
                default: true
            },
            bordered: {
                type: Boolean,
                default: false
            },
            size: {
                type: Object,
                default: () => {}
            },
            options: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            customSize () {
                const size = {}
                if (this.size && this.size.width) {
                    size['--c-popover-max-width'] = this.size.width
                    size['--c-popover-width'] = '100%'
                }
                if (this.size && this.size.height) {
                    size['--c-popover-max-heigth'] = this.size.height
                }
                return size
            }
        }
    }
</script>
