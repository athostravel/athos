<template>
    <AtFooter v-bind="atFooter" />
</template>

<script>
    export default {
        data () {
            return {
                atFooter: {
                    copyright: {
                        text: '© Dondear Viajes S.L. BAL716 M/M con C.I.F. B57797730',
                    },
                    image: {
                        src: 'https://d1hkxmgwhmmdhs.cloudfront.net/dist/assets/img/muchoviaje/footer-logo.png',
                        alt: 'Alternative Text'
                    },
                    lists: [
                        {
                            title: "Sobre Nosotros",
                            links: [
                                [
                                    {
                                        href: '#',
                                        text: 'Condiciones Generales'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de privacidad'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de Cookies'
                                    },
                                    {
                                        href: '#',
                                        text: 'Contacto'
                                    }
                                ]
                            ]
                        },
                        {
                            title: "Sobre Nosotros 2",
                            links: [
                                [
                                    {
                                        href: '#',
                                        text: 'Condiciones Generales'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de privacidad'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de Cookies'
                                    },
                                    {
                                        href: '#',
                                        text: 'Contacto'
                                    },
                                    {
                                        href: '#',
                                        text: 'Lorem ipsum'
                                    },
                                    {
                                        href: '#',
                                        text: 'Lore'
                                    }
                                ]
                            ]
                        },
                        {
                            title: "Sobre Nosotros 3",
                            links: [
                                [
                                    {
                                        href: '#',
                                        text: 'Condiciones Generales'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de privacidad'
                                    }
                                ]
                            ]
                        },
                        {
                            title: "Sobre Nosotros 4",
                            links: [
                                [
                                    {
                                        href: '#',
                                        text: 'Condiciones Generales'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de privacidad'
                                    },
                                    {
                                        href: '#',
                                        text: 'Política de Cookies'
                                    },
                                    {
                                        href: '#',
                                        text: 'Contacto'
                                    }
                                ]
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
