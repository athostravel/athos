<template>
    <div>
        <div
            @click="openPopover(id, $event)"
        >
            Click
        </div>

        <AtPopover
            :id="id"
            v-bind="popoverOptions"
        >
            Vue is Awesome!
        </AtPopover>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: 'popover1',
                popoverOptions: {
                }
            }
        }
    }
</script>
