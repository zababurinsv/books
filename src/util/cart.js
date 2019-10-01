'use strict';

import firebase from 'firebase/app';
import 'firebase/database';

import { fire } from "./firebase.js"
import { auth } from "./auth.js"

const cart = {
    isExist: function(store, obj){
        if( store.state.user.cart.goods.length > 0 ){
            for(let i=0; i < store.state.user.cart.goods.length; i++)
                if( store.state.user.cart.goods[i].id == obj.id && store.state.user.cart.goods[i].category == obj.category )
                    return true
            }
        return false
    },
    read: function(store){
        if( store.state.user.id != undefined ){
            let path = '/users/'
            fire.readUserData( path, store.state.user.id )
            .then(
                result => {
                    if( result.cart != undefined ){
                        console.log('readUserData complite')
                        store.commit( 'userCart', result.cart )
                    }else{
                        console.log('readUserData complite CART EMPTY ')
                    }
                }
            ).catch(function(error) {
                console.log('readUserData error')
            });
        }else
            console.log('user undefined')
    },
    write: function(store){
        console.log( 'cart write ', store.state.user.isAnonymous )
        if( store.state.user.isAnonymous == true || store.state.user.isRegisted == true ){
            let path = '/users/'
            fire.writeUserData( path, store.state.user.id, { writeAt: firebase.database.ServerValue.TIMESTAMP, cart: store.state.user.cart.goods })
            console.log('cart write DONE')
        }else
            console.log('cart write ERROR, user undefined')
    },
    button: function(store, thiz){
        if( thiz.inCart == true ){
            console.log('inCart == add')
            if( store.state.user.isAnonymous == false && store.state.user.isRegisted == false ){
                console.log('addToCart user === undefined')
                let thiz = this
                auth.signInAnonymous(thiz)
                .then( result => {
                    console.log('auth.signInAnonymous(this) DONE')
                    auth.changeState(thiz)
                    store.commit( 'userCartDeleteOne', thiz.obj.data )
                    store.commit( 'userCartAdd', thiz.obj.data )
                    cart.write(store)
                })
                .catch( error => {
                    console.log('product signInAnonymous ERROR')
                })
            }else{
                store.commit( 'userCartDeleteOne', thiz.obj.data )
                store.commit( 'userCartAdd', thiz.obj.data )
                cart.write(store)
            }
        }else if( thiz.inCart == false ) {
            console.log('inCart == del')
            if( auth.isUser == false ){
                let thiz = thiz
                auth.signInAnonymous(thiz)
                .then( result => {
                    auth.changeState(thiz)
                    store.commit( 'userCartDeleteOne', thiz.obj.data )
                    cart.write(store)
                })
                .catch( error => {
                    console.log('product signInAnonymous ERROR')
                })
            }else{
                store.commit( 'userCartDeleteOne', thiz.obj.data )
                cart.write(store)
            }
        }
    }
}

export { cart as cart };
