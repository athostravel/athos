import Modal from './Modal.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Modal)
    }
}

use(Plugin)

export default Plugin
