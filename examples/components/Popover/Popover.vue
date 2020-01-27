<template>
    <div>
        <AtButton
            @click.native="togglePopper(popper.id, $event)"
        >
            Click Me
        </AtButton>

        <AtPopover
            :popper="popper"
            :options="options"
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
                        width: '600px',
                        height: '200px'
                    }
                }
            }
        }
    }
</script>
