const axios = require('axios')

const news = {
    read: async function(link, start, stop){
        const result = await axios.get(link, {
            params: {
                start: start,
                stop: stop
            },
            responseType: 'json'
        } )
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log('read.news = ERROR');
            return undefined
        })
        return result
    }
}

export { news as news };
