'use strict';

const dateFormat = {
    twoDigs: function(int){
        if( int < 10 )
            return '0'+int
        return int
    },
    toYMDHMS: function(time){
        const date = new Date(time)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()  
        return year + '.' + this.twoDigs(month) + '.' + this.twoDigs(day) + ' ' + this.twoDigs(hour) + ':' + this.twoDigs(min) + ':' + this.twoDigs(sec)
    }
}

export { dateFormat as dateFormat };