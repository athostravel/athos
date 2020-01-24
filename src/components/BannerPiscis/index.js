import BannerPiscis from './BannerPiscis.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, BannerPiscis)
    }
}

use(Plugin)

export default Plugin
