<template>
    <div>
        <AtButton
            @mouseenter.native="togglePopper(popper.id, $event)"
            @mouseleave.native="togglePopper(popper.id, $event)"
        >
            Hover Me !
        </AtButton>

        <AtTooltip
            :popper="popper"
        >
            Tooltip Content
        </AtTooltip>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                popper: {
                    id: 'tooltip'
                }
            }
        }
    }
</script>
