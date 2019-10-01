'use strict';

const mouseControl = {
    scroll: function(store){
        window.onscroll = function() {
            store.commit('sysScroll', {
                scroll: window.pageYOffset || document.documentElement.scrollTop
            })
        }
    },
    coordinates: function(store){
        function setXY(e){
            store.commit('sysXY', {
                x: e.pageX ,
                y: e.pageY
            })
        }
        addEventListener('mousemove', setXY, false);
    },
}

export { mouseControl as mouseControl };