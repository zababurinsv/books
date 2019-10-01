'use strict';

import firebase from 'firebase/app';
import 'firebase/auth';

import { cart } from "./cart.js"

const auth = {
    signInAnonymous: function(thiz){
        console.log( 'auth signInAnonymous' )
        firebase.auth().signInAnonymously()
        .then(
            result => {
                console.log( 'signInAnonymous DONE' )
                this.changeState(thiz)
                cart.read(store)
            }
        ).catch(function(error) {
            console.log('signInAnonymous ERROR')
        });
    },
    changeState: function(store, thiz){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if( user.isAnonymous == true ){
                    console.log( 'user.isAnonymous' )
                    store.commit( 'userId', user.uid )
                    store.commit( 'userIsAnonymous', user.isAnonymous )
                    cart.read(store)
                }else{
                    console.log('user.isRegistred')
                    store.commit( 'userId', user.uid )
                    store.commit( 'userIsRegistred', user.isAnonymous )
                    cart.read(store)
                }
            }else{
                store.commit( 'userId', undefined )
                store.commit( 'userIsAnonymous', false )
                store.commit( 'userIsRegistred', false )
                console.log('auth changeState undefined')
            }
        })
    }
}

export { auth as auth };