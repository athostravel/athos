<template>
    <div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" size="diorite" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="basalt" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="obsidian" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="tuff" text>
                Button
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" color="primary" size="diorite" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="basalt" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="obsidian" text>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="tuff" text>
                Button
            </AtButton>
        </div>

        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton">
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" size="tuff">
                Button
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" color="primary" size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" size="tuff">
                Button
            </AtButton>
        </div>

        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" color="z" outlined size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="z" outlined size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="z" outlined>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="z" outlined size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="z" outlined size="tuff">
                Button
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" color="primary" outlined size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" outlined size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" outlined>
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" outlined size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" color="primary" outlined size="tuff">
                Button
            </AtButton>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atButton: {
                    href: '#'
                }
            }
        }
    }
</script>
