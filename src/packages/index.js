import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Icon from './icon.vue'
import Row from './layout/row.vue'
import Col from './layout/col.vue'

const install = (Vue) => {
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Icon.name, Icon)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
}

// 全局通过script引入
if (typeof window.Vue !== 'undefined') {
    install(Vue)
}

export default {
    install
}