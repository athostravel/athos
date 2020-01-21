<template>
    <AtHeader v-bind="atHeader" />
</template>

<script>
    export default {
        data () {
            return {
                atHeader: {
                    logo: 'https://pre-apps-design-pegasus.s3-eu-west-1.amazonaws.com/athos_dummy/logo-muchoviaje.svg',
                    nav: [
                        ''
                    ],
                    menu: [
                        {
                            text: 'Vuelo + Hotel',
                            link: 'https://www.muchoviaje.com/ofertas/paquetes/',
                            submenu: [
                                {

                                }
                            ]
                        },
                        {
                            text: 'Caribe',
                            link: ''
                        },
                        {
                            text: 'Circuitos',
                            link: ''
                        }
                    ]
                }
            }
        }
    }
</script>
