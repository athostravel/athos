import Section from './Section.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Section)
    }
}

use(Plugin)

export default Plugin
