<template>
    <div class="preview-items-horizontal">
        <AtIcon v-bind="atIcon" size="diorite" />
        <AtIcon v-bind="atIcon" size="basalt" />
        <AtIcon v-bind="atIcon" />
        <AtIcon v-bind="atIcon" size="obsidian" />
        <AtIcon v-bind="atIcon" size="tuff" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atIcon: {
                    icon: 'heart'
                }
            }
        }
    }
</script>
