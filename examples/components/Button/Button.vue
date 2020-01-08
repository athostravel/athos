<template>
    <div>
        <AtButton v-bind="atButton" color="primary">
            Button
        </AtButton>
        <AtButton v-bind="atButton" rounded>
            Button
        </AtButton>
        <AtButton v-bind="atButton" outlined color="primary">
            Button
        </AtButton>
        <AtButton v-bind="atButton" outlined rounded>
            Button
        </AtButton>
        <AtButton v-bind="atButton" bordered color="primary">
            Button
        </AtButton>
        <AtButton v-bind="atButton" bordered rounded>
            Button
        </AtButton>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atButton: {
                    href: '#',
                    text: 'Button'
                }
            }
        }
    }
</script>
