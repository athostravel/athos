import PriceButton from './PriceButton'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, PriceButton)
    }
}

use(Plugin)

export default Plugin
