<template>
    <AtPopper v-bind="popper">
        <AtDialogBox v-bind="options">
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
        }
    }
</script>
