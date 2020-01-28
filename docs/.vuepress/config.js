const { resolve, join } = require('path')

module.exports = {
    base: '/athos/',
    dest: resolve('docs/dist'),
    extraWatchFiles: [
        resolve('examples')
    ],
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: './examples'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'Avoris Travel',
            description: 'Vue componentes for Avoris Travel Apps'
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Avoris Travel',
            description: 'Componentes de Vue para las aplicaciones de Avoris Travel'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname),
                '@lib': resolve('src'),
                '@components': resolve('src/components'),
                '@layouts': resolve('src/layouts'),
                '@pages': resolve('src/pages'),
                '@utils': resolve('src/utils'),
                '@store': resolve('src/store'),
                '@mixins': resolve('src/mixins'),
                '@directives': resolve('src/directives'),
                '@scss': resolve('src/scss')
            }
        }
    },
    scss: {
        sassOptions: {
            includePaths: [join(__dirname, '../../src/scss')]
        },
        prependData: '@import "core/core";'
    },
    themeConfig: {
        logo: '/assets/img/avoris.svg',
        themes: [
            {
                name: 'Default',
                class: '',
                icons: 'https://i.icomoon.io/public/2320a6af31/athos/style.css',
                fonts: []
            },
            {
                name: 'Iberojet',
                class: 't-iberojet',
                icons: 'https://i.icomoon.io/public/2320a6af31/iberojet/style.css',
                fonts: [
                    'https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap',
                    'https://fonts.googleapis.com/css?family=Prata&display=swap'
                ]
            },
            {
                name: 'Muchoviaje',
                class: 't-muchoviaje',
                icons: 'https://i.icomoon.io/public/2320a6af31/muchoviaje/style.css',
                fonts: [
                    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap'
                ]
            }
        ],
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                }
            },
            '/es/': {
                selectText: 'Idiomas',
                label: 'Español',
                ariaLabel: 'Idiomas',
                editLinkText: 'Editar esta página en GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'Hay disponible nuevo contenido.',
                        buttonText: 'Actualizar'
                    }
                },
                nav: [
                    {
                        text: 'Inicio',
                        link: '/es/'
                    },
                    {
                        text: 'Documentación',
                        link: '/es/documentacion/'
                    },
                    {
                        text: 'Desarrollo',
                        link: '/es/desarrollo/'
                    }
                ],
                sidebar: {
                    '/es/documentacion/': [
                        {
                            title: 'Empezando',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/'
                            ]
                        },
                        {
                            title: 'Componentes',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/components/banner-sirius',
                                '/es/documentacion/components/banner',
                                '/es/documentacion/components/button',
                                '/es/documentacion/components/checkbox',
                                '/es/documentacion/components/container',
                                '/es/documentacion/components/heading',
                                '/es/documentacion/components/icon-card',
                                '/es/documentacion/components/icon',
                                '/es/documentacion/components/picture',
                                '/es/documentacion/components/price-button',
                                '/es/documentacion/components/price',
                                '/es/documentacion/components/radio',
                                '/es/documentacion/components/section-lynx',
                                '/es/documentacion/components/section',
                                '/es/documentacion/components/switch-orion',
                                '/es/documentacion/components/switch',
                                '/es/documentacion/components/tetris',
                                '/es/documentacion/components/text'
                            ]
                        },
                        {
                            title: 'Layouts',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/layouts/layout-virgo'
                            ]
                        },
                        {
                            title: 'Páginas',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/pages/page-hydra'
                            ]
                        },
                        {
                            title: 'Estilos',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: 'Clases de utilidad',
                                    path: '/es/documentacion/estilos/clases-de-utilidad/',
                                    collapsable: false,
                                    sidebarDepth: 2,
                                    children: [
                                        '/es/documentacion/estilos/clases-de-utilidad/colores',
                                        '/es/documentacion/estilos/clases-de-utilidad/gaps'
                                    ]
                                }
                            ]
                        }
                    ],
                    '/es/desarrollo/': [
                        {
                            title: 'Empezando',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/desarrollo/',
                                '/es/desarrollo/crear-un-componente',
                                '/es/desarrollo/documentar-un-componente'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
