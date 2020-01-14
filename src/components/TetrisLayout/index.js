import TetrisLayout from './TetrisLayout.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, TetrisLayout)
    }
}

use(Plugin)

export default Plugin
