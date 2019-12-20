import CardIcon from './CardIcon.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CardIcon)
    }
}

use(Plugin)

export default Plugin
