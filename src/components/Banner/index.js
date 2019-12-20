import Banner from './Banner.vue'
import BannerContent from './BannerContent.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Banner)
        registerComponent(Vue, BannerContent)
    }
}

use(Plugin)

export default Plugin
