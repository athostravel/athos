<template>
    <div class="preview-items">
        <AtIzarCard v-bind="atIzarCard">
            <div slot="info">
                <p>Llámalos al 91 846 048 de lunes a viernes de 9:00h a 20:00h, a sábados de 9:00h a 14:00h</p>
                <p>Email de atención al viajero: <a href="mailto:reservas@muchoviaje.com">reservas@muchoviaje.com</a></p>
            </div>
        </AtIzarCard>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atIzarCard: {
                    title: "¡Síguenos!",
                    rrss: [
                        {
                            url: 'https://instagram.com/muchoviaje',
                            iconCustom: 'heart'
                        },
                        {
                            url: 'https://twitter.com/muchoviaje',
                            iconCustom: 'heart'
                        },
                        {
                            url: 'https://facebook.com/muchoviaje',
                            iconCustom: 'heart'
                        }
                    ]
                }
            }
        }
    }
</script>
