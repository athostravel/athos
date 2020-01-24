<template>
    <div>
        <AtCollapse v-bind="conf">
            <p><strong>INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS</strong></p>

            <p><strong>Responsable:</strong> Avoris Retail Division, S.L.</p>

            <p><strong>Delegado de protección de datos:</strong> c/José Rover Motta, 27, 07006, Palma de Mallorca, dpo@avoristravel.com</p>

            <p><strong>Finalidadades y legitimación:</strong> Remisión por Avoris Retail Division S.L. de comunicaciones comerciales de productos/servicios ofertados por esta. Al darse de alta en la Newsletter y pulsar el botón "Enviar", entendemos que otorga su consentimiento para el tratamiento de los mismo para la finalidad descrita. Remisión por otras sociedades de Ávoris de comunicaciones comerciales acerca de sus productos y servicios, sólo con consentimiento.</p>

            <p><strong>Destinatarios:</strong> Sociedades de Ávoris, sólo con consentimiento. Terceros proveedores de servicios que tienen acceso a sus datos personales.</p>

            <p><strong>Derechos:</strong> El cliente podrá revocar en cualquier momento su consentimiento, así como ejercitar, los derechos de oposición, acceso, portabilidad, rectificación, limitación supresión de datos y a no ser objeto de una decisión basada únicamente en el tratamiento automatizado de sus datos, remitiendo una comunicación por escrito a Avoris Retail Division S.L. a las direcciones indicadas.</p>

            <p><strong>Más información:</strong> <a href="#">Clique aquí</a></p>
        </AtCollapse>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                conf: {
                    align: 'center',
                    header: {
                        text: 'Ver información básica sobre protección de datos'
                    }
                }
            }
        }
    }
</script>