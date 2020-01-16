<template>
    <div class="preview-items-horizontal">
        <AtButton v-bind="atButton">
            Button
        </AtButton>
        <AtButton v-bind="atButton" icon rounded>
            <AtIcon icon="heart" />
        </AtButton>
        <AtButton v-bind="atButton" rounded>
            Button
        </AtButton>
        <AtButton v-bind="atButton" radiused>
            Button
        </AtButton>
        <AtButton v-bind="atButton" outlined>
            Button
        </AtButton>
        <AtButton v-bind="atButton" bordered>
            Button
        </AtButton>
        <AtButton v-bind="atButton" bordered disabled>
            Button
        </AtButton>
        <AtButton v-bind="atButton" text disabled>
            Button
        </AtButton>
        <AtButton v-bind="atButton" color="primary" outlined text>
            Aqui
        </AtButton>
        <AtButton v-bind="atButton" text rounded>
            Button
        </AtButton>
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
