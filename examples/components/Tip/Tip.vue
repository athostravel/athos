<template>
    <AtTip v-bind="example" />
</template>

<script>
    export default {
        data () {
            return {
                example: {
                    icon: 'grid',
                    title: '15 años de Experiencia',
                    description: 'En internet para que tu compra sea comoda y segura'
                }
            }
        }
    }
</script>
