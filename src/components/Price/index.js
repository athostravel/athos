import Price from './Price'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Price)
    }
}

use(Plugin)

export default Plugin
