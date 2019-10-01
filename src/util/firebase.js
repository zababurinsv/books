'use strict';

import firebase from 'firebase/app';
import 'firebase/database';

const fire = {
    writeUserData: function(path, userId, data, callback) {
        firebase.database().ref(path + userId).set( data )
        .then( () => {
            callback
            console.log('writeUserData DONE')
        })
        .catch(
            console.log('writeUserData ERROR')
        )
    },
    readUserData: function(path, userId){
        return firebase.database().ref(path + userId).once('value')
        .then(function(snapshot) {
            console.log('readUserData DONE')
            var res = ( snapshot.val() && snapshot.val() ) || undefined;
            return res
        })
        .catch(
            console.log('readUserData ERROR')
        )
    }
}

export { fire as fire };
