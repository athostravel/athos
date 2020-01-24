<template>
    <div>
        <AtButton
            @mouseenter.native="togglePopper(options.id, $event)"
            @mouseleave.native="togglePopper(options.id, $event)"
        >
            Click
        </AtButton>

        <AtTooltip
            :popper="options"
        >
            Tooltip Content
        </AtTooltip>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                options: {
                    id: 'tooltip'
                }
            }
        }
    }
</script>
