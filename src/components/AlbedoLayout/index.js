import AlbedoLayout from './AlbedoLayout.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, AlbedoLayout)
    }
}

use(Plugin)

export default Plugin
