import LayoutVirgo from './LayoutVirgo.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, LayoutVirgo)
    }
}

use(Plugin)

export default Plugin
