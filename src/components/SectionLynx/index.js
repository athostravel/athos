import SectionLynx from './SectionLynx.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, SectionLynx)
    }
}

use(Plugin)

export default Plugin
