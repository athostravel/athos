<template>
    <div>
        <AtFooter v-bind="atFooter">
            <AtText size="basalt">
                {{atFooter.items.text}}
            </AtText>
        </AtFooter>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atFooter: {
                    items: {
                        text: 'lorem ipsum'
                    }
                }
            }
        }
    }
</script>
