<template>
    <div class="preview-items">
        <AtIconCard v-bind="atIconCard">
            Lorem ipsum
        </AtIconCard>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atIconCard: {
                    icon: 'heart'
                }
            }
        }
    }
</script>
