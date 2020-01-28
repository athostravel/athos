import Tips from './Tips.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Tips)
    }
}

use(Plugin)

export default Plugin
