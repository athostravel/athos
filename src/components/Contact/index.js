import Contact from './Contact.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Contact)
    }
}

use(Plugin)

export default Plugin
