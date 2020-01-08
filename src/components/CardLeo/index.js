import CardLeo from './CardLeo.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CardLeo)
    }
}

use(Plugin)

export default Plugin
