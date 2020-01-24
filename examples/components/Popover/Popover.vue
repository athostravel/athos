<template>
    <div>
        <AtButton
            ref="button"
            @mouseenter.native="openPopover(id, $event)"
            @mouseleave.native="openPopover(id, $event)"
        >
            Click
        </AtButton>

        <AtPopover
            :id="id"
            v-bind="popoverOptions"
        >
            PopOver
        </AtPopover>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: 'popover1',
                popoverOptions: {
                    placement: 'bottom',
                    arrow: false,
                    tooltip: true
                }
            }
        }
    }
</script>
