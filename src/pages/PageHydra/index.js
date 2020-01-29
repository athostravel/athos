import PageHydra from './PageHydra.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, PageHydra)
    }
}

use(Plugin)

export default Plugin
