import Accordion from './Accordion.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Accordion)
    }
}

use(Plugin)

export default Plugin
