import throttle from 'lodash/throttle'

const attributes = {
    delay: {
        default: 200
    },
    immediate: {
        default: true
    },
    disabled: {
        default: false
    },
    distance: {
        default: 10
    }
}

const getScrollContainer = (el) => {
    let parent = el
    while (parent) {
        if (document.documentElement == parent) {
            return window
        }
        const overflow = getComputedStyle(parent)['overflow-y']
        if (overflow.match(/scroll|auto/)) {
            return parent
        }
        parent = parent.parentNode
    }
}

const getScrollOptions = (el, vm) => {
    return Object.entries(attributes).reduce((map, [key, option]) => {
        let defaultValue = option.default
        let value = el.getAttribute(`infinite-scroll-${key}`)
        value = vm[value] ? vm[value] : defaultValue
        map[key] = value
        return map
    }, {})
}

const handleScroll = function (cb) {
    const { container, el, vm, observer } = this[scope]
    const { disabled, distance } = getScrollOptions(el, vm)
    if (disabled) return // 没有更多数据了

    let scrollBottom = container.scrollTop + container.clientHeight
    if (container.scrollHeight - scrollBottom <= distance) {
        cb()
    } else {
        if (observer) {
            observer.disconnect()
            this[scope].observer = null
        }
    }
}

const scope = 'infinite-scroll'

export default {
    name: 'infinite-scroll',
    inserted(el, bindings, vnode) {
        const cb = bindings.value
        const vm = vnode.context
        const container = getScrollContainer(el)
        if (container !== window) {
            const { delay, immediate } = getScrollOptions(el, vm)
            const onScroll = throttle(handleScroll.bind(el, cb), delay)
            el[scope] = {
                onScroll,
                container,
                el,
                vm
            }
            if (immediate) {
                const observer = el[scope].observer = new MutationObserver(onScroll) // 页面变化没满页面的话继续加载
                observer.observe(container, {
                    childList: true,
                    subtree: true
                })
                onScroll() // 默认先加载一次
            }
            container.addEventListener('scroll', onScroll)
        }
    },
    unbind(el) {
        const { onScroll, container } = el[scope]
        if (container) {
            container.removeEventListener('scroll', onScroll)
            el[scope] = null
        }
    }
}