import CardAlya from './CardAlya.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CardAlya)
    }
}

use(Plugin)

export default Plugin
