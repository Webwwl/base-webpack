import { SyncHook, SyncBailHook, SyncWaterfallHook } from 'tapable'

let hook = new SyncHook(['arg'])

hook.tap('a', (r) => {
    console.log('a', r)
})
hook.tap('b', (r) => {
    console.log('b', r)
})

hook.intercept({
    call(...args) {
        console.log('args===:'. args)
    },
    register(tap) {
        console.log("TCL: register -> tap", tap)
        return tap
    }
})
hook.call(1)

let hook2 = new SyncBailHook(['arg'])

hook2.tap('aa', (r) => {
    console.log('aa arg:', r)
    console.log('aa')
    return 1
})

hook2.tap('bb', () => {
    console.log('bb')
})

hook2.call(1)


let hook3 = new SyncWaterfallHook(['arg1'])

hook3.tap('aaa', (r) => {
    console.log('aaa', r)
    return 'aaa'
})

hook3.tap('bbb', (r) => {
    console.log('bbb', r)
})

hook3.tap('ccc', (r) => {
    console.log('ccc', r)
})

hook3.call(1)