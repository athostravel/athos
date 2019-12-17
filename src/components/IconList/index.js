import IconList from './IconList.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, IconList)
    }
}

use(Plugin)

export default Plugin
