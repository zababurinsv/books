import { createApp } from './app'

export default context => {
  return new Promise((resolve, reject) => {

    const { app, router, store } = createApp()
    const meta = app.$meta()

    router.push(context.url)
    context.meta = app.$meta()

    router.onReady(() => {
      const componentsMatched = router.getMatchedComponents()
      if (componentsMatched.length === 0) {
        return reject({code: 404})
      }
      Promise.all(componentsMatched.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      }))
      .then(() => {
        context.state = store.state
        resolve(app)
      })
      .catch(reject)
    }, reject)
  })
}