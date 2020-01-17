<template>
    <div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" variant="" size="dunite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" size="">
                Default
            </AtButton>
            <AtButton v-bind="atButton" variant="" size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" size="tuff">
                Button
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" variant="" color="primary" size="dunite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" color="primary" size="diorite">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" color="primary" size="basalt">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" color="primary" size="">
                Default
            </AtButton>
            <AtButton v-bind="atButton" variant="" color="primary" size="obsidian">
                Button
            </AtButton>
            <AtButton v-bind="atButton" variant="" color="primary" size="tuff">
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
