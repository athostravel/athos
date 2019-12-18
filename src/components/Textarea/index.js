import TextArea from './Textarea.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, TextArea)
    }
}

use(Plugin)

export default Plugin
