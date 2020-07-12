import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Icon from './icon.vue'

const install = (Vue) => {
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Icon.name, Icon)
}

// 全局通过script引入
if (typeof window.Vue !== 'undefined') {
    install(Vue)
}

export default {
    install
}