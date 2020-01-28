<template>
    <AtPopper v-bind="[popper,{size: options.size}]">
        <AtDialogBox v-bind="[options,cfg.options]">
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

            options: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    // Propiedas por defecto
                }
            }
        }
    }
</script>
