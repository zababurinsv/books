'use strict';

const sys = {
    random: function (min, max) {
        if (max == null) { max = min; min = 0; }
        if (min > max) { var tmp = min; min = max; max = tmp; }
        return min + (max - min) * Math.random();
    },
    randomLine: function(length){
        let line = []
        let result = []

        for( let i = 0; i < length; i++ )
            line.push( i )

        while ( line.length > 0 ) {
            let r = Math.round( this.random(0, line.length-1) )
            result.push( line[r] )
            line.splice(r, 1)
        }
        return result
    },
    randomFrom(get, from){
        let rand = this.randomLine(from)
        let result = []
        for( let i = 0; i < get; i++ )
            result.push(rand[i])
        return result
    },
    getRect: function(id){
        return document.getElementById(id).getBoundingClientRect()
    },
    getPosA: function(id){
        return { x: this.getRect( id ).left, y: this.getRect( id ).top - document.body.getBoundingClientRect().top }
    },
    getPosR: function(c, b){
        let containerXY = this.getPosA( c )
        let blcokXY = this.getPosA( b )
        return { x: blcokXY.x - containerXY.x, y: blcokXY.y - containerXY.y }
    }
}

export { sys as sys };


