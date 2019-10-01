'use strict';

const screenControl = {
    set(store){
        store.commit('sysWindow', 
        {
            w: window.innerWidth,
            h: window.innerHeight
        }) 
    },
    event(store){
        window.addEventListener('resize', (event) => 
        store.commit('sysWindow', 
            {
                w: window.innerWidth,
                h: window.innerHeight
            })
        )
    }
}

export { screenControl as screenControl };