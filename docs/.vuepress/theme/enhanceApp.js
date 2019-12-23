import VueMeta from 'vue-meta'
import store from '@/theme/store'
import '@/theme/styles/index.scss'
import Athos from '@lib'

export default ({ Vue, options, siteData }) => {
    Vue.use(VueMeta)
    Vue.use(Athos)

    Object.assign(options, { store })

    if (siteData.themeConfig.themes.length) {
        options.store.commit('themes/setThemes', siteData.themeConfig.themes)
    }
}
