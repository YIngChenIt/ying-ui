import MessageComponent from './message.vue'
import Vue from 'vue'

let vm
const getVm = () => {
    vm = new Vue({
        render: h => h(MessageComponent)
    }).$mount()
    // vm.$el.style.top = vm.$el.style.top + 60
    console.log(vm.$el.offsetTop)
    document.body.appendChild(vm.$el)
}

const Message = {
    init(options) {
        if (!vm) {
            getVm()
        }
        vm.$children[0].add(options)
    }
}

export {
    Message
}