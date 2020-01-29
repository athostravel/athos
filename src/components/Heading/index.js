import Heading from './Heading.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Heading)
    }
}

use(Plugin)

export default Plugin
