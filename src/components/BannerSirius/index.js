import BannerSirius from './BannerSirius.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, BannerSirius)
    }
}

use(Plugin)

export default Plugin
