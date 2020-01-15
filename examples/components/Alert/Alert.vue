<template>
    <div class="preview-items">
        <AtAlert v-bind="atAlertInfo" variant="info" />
        <AtAlert v-bind="atAlertError" variant="error" />
        <AtAlert v-bind="atAlertOk" variant="ok" />
        <AtAlert v-bind="atAlertWarning" variant="warning" />
        <AtAlert v-bind="alertInfoWithTitle" variant="info" />
        <AtAlert v-bind="alertInfoWithButtons" variant="info" />
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
                },
                alertInfoWithTitle: {
                    title: 'Titulo',
                    text: 'Esto no es importante, pero deberías saberlo'
                },
                alertInfoWithButtons: {
                    title: 'Titulo',
                    text: 'Esto no es importante, pero deberías saberlo',
                    buttons: [
                        {
                            text: 'Button',
                            button: {
                                color: 'primary'
                            }
                        },
                        {
                            text: 'Button',
                            button: {
                                color: 'secondary'
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
