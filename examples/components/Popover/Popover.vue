<template>
    <div>
        <AtButton
            @click.native="togglePopper(popper.id, $event)"
        >
            Click Me
        </AtButton>

        <AtPopover
            :popper="popper"
            v-bind="options"
        >
            PopOver
        </AtPopover>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                popper: {
                    id: 'tooltip'
                },
                options: {
                    bordered: true,
                    arrow: true,
                    size: {
                        width: '20em',
                        height: '200px'
                    }
                }
            }
        }
    }
</script>
