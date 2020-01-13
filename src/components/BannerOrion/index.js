import BannerOrion from './BannerOrion.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, BannerOrion)
    }
}

use(Plugin)

export default Plugin
