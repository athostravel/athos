<template>
    <div>
        <AtButton v-bind="atButton">
            Button
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
