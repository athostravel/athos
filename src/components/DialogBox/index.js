import DialogBox from './DialogBox.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, DialogBox)
    }
}

use(Plugin)

export default Plugin
