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
            v-bind="options"
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
                    id: 'tooltip',
                    offset: [0, 10]
                },
                options: {
                    arrow: true

                }
            }
        }
    }
</script>
