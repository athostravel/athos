import Paragraph from './Paragraph.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Paragraph)
    }
}

use(Plugin)

export default Plugin
