<template>
    <div>
        <div
            ref="popoverReference"
            @click="openPopover('eo')"
        >
            Click
        </div>

        <AtPopover
            :popover-options="popoverOptions"
        >
            <AtPopoverContent>
                <div class="custom-content">
                    Vue is Awesome!
                </div>
            </AtPopoverContent>
        </AtPopover>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isPopoverVisible: false,
                popoverOptions: {
                    popoverReference: null,
                    placement: 'top',
                    offset: '0,0'
                }
            }
        }
    }
</script>
