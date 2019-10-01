import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
  state: {
    host: 'localhost',
    window:{
        loaded: false,
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        wl: 0,
        scroll: 0,
        minWidth: 860,
        key: ''
    }
  },
  mutations,
  //actions,
  //getters
}