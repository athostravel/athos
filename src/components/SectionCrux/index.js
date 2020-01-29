import SectionCrux from './SectionCrux.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, SectionCrux)
    }
}

use(Plugin)

export default Plugin
