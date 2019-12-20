import VueMeta from 'vue-meta'
import store from '@/theme/store'
import '@/theme/styles/index.scss'
import Athos from '@lib'

export default ({ Vue, options }) => {
    Vue.use(VueMeta)
    Vue.use(Athos)

    Object.assign(options, { store })

    options.store.commit('themes/setThemes', [
        {
            name: 'Default',
            class: '',
            icons: 'https://i.icomoon.io/public/2320a6af31/athos/style.css',
            fonts: [
                'https://fonts.googleapis.com/css?family=Raleway&display=swap',
                'https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap'
            ]
        },
        {
            name: 'Iberojet',
            class: 't-iberojet',
            icons: 'https://i.icomoon.io/public/2320a6af31/iberojet/style.css',
            fonts: [
                'https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap'
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
    ])
}
