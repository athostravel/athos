import LinksList from './LinksList.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, LinksList)
    }
}

use(Plugin)

export default Plugin
