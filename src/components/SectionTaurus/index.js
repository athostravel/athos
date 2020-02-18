import SectionTaurus from './SectionTaurus.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, SectionTaurus)
    }
}

use(Plugin)

export default Plugin
