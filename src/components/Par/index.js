import Text from './Par.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Text)
    }
}

use(Plugin)

export default Plugin
