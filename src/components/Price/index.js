import Price from './Price.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Price)
    }
}

use(Plugin)

export default Plugin
