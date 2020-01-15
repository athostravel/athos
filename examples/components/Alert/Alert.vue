<template>
    <div class="preview-items">
        <AtAlert v-bind="atAlertInfo" type="info" />
        <AtAlert v-bind="atAlertError" type="error" />
        <AtAlert v-bind="atAlertOk" type="ok" />
        <AtAlert v-bind="atAlertWarning" type="warning" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atAlertInfo: {
                    text: 'Esto no es importante, pero deberías saberlo'
                },
                atAlertError: {
                    text: 'Oh No! Algo ha ido mal :('
                },
                atAlertWarning: {
                    text: 'Hmm... Algo no va bien'
                },
                atAlertOk: {
                    text: 'Enhorabuena'
                }
            }
        }
    }
</script>
