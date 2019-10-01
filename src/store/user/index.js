import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
  state: {
    isAnonymous: false,
    isRegisted: false,
    id: undefined,
    cart: {
      isShow: false,
      goods: []
    }
  },
  mutations,
  //actions,
  //getters
}