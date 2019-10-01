export const userIsAnonymous = (state, payload) => {
    state.isAnonymous = payload
}
export const userIsRegistred = (state, payload) => {
    state.isRegisted = payload
}
export const userId = (state, payload) => {
    if( payload != undefined )
        state.id = payload
    else
        console.log( 'userId undefined' )
}
export const userCart = (state, payload) => {
    state.cart.goods = payload
}
export const userCartIsShow = (state, payload) => {
    state.cart.isShow = payload
}
export const userCartAdd = (state, payload) => {
    state.cart.goods.push( payload )
}
export const userCartDeleteOne = (state, obj) => {
    if( state.cart.goods.length > 0 ){
        for( let i=0; i < state.cart.goods.length; i++ ){
            if( obj.category == state.cart.goods[i].category && obj.id == state.cart.goods[i].id ){
                delete state.cart.goods[i]
                state.cart.goods = state.cart.goods.filter(function(e){return e}); 
            } 
        } 
    }
}
export const userCartProductQuantity = (state, obj) => {
    state.cart.goods[ obj.index ].quantity = obj.value
}