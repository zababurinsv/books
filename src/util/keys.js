'use strict';

const keysControl = {
    event(store){
        window.addEventListener('keyup', (e) => {
            store.commit( 'sysKey', e.code )
        } )
    }
}

export { keysControl as keysControl };