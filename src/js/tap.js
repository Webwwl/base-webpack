import { SyncHook } from 'tapable'

let hook = new SyncHook()

hook.tap('a', () => {
    console.log('a')
})
hook.tap('b', () => {
    console.log('b')
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