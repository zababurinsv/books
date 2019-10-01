'use strict';

const textFormat = {
    engToRus: function(word){
        if( word == 'catalog' )
            return 'Каталог'
        else if( word == 'books' )
            return 'Книги'
 
        return word
    }
}

export { textFormat as textFormat };