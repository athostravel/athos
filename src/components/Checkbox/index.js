import CheckBox from './Checkbox.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CheckBox)
    }
}

use(Plugin)

export default Plugin
