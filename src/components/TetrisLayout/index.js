import TetrisLayout from './TetrisLayout.vue'
import TetrisLayoutItem from './TetrisLayoutItem.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, TetrisLayout)
        registerComponent(Vue, TetrisLayoutItem)
    }
}

use(Plugin)

export default Plugin
