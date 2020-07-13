import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Icon from './icon.vue'
import Row from './layout/row.vue'
import Col from './layout/col.vue'
import Aside from './container/aside.vue'
import Header from './container/header.vue'
import Container from './container/container.vue'
import Footer from './container/footer.vue'
import Main from './container/main.vue'
import Input from './input.vue'
import Upload from './upload/upload.vue'
import Progress from './progress.vue'

const install = (Vue) => {
    Vue.component(Button.name, Button)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Icon.name, Icon)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Aside.name, Aside)
    Vue.component(Header.name, Header)
    Vue.component(Container.name, Container)
    Vue.component(Footer.name, Footer)
    Vue.component(Main.name, Main)
    Vue.component(Input.name, Input)
    Vue.component(Upload.name, Upload)
    Vue.component(Progress.name, Progress)
}

// 全局通过script引入
if (typeof window.Vue !== 'undefined') {
    install(Vue)
}

export default {
    install
}