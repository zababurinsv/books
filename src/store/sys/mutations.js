export const sysWindow = (state, obj) => {
    state.window.w = obj.w
    state.window.h = obj.h
}
export const sysXY = (state, obj) => {
    state.window.x = obj.x
    state.window.y = obj.y
}
export const sysScroll = (state, obj) => {
    state.window.scroll = obj.scroll
}
export const sysKey = (state, payload) => {
    state.window.key = payload
}
export const sysWindowLoaded = (state, payload) => {
    state.window.loaded = payload
}


