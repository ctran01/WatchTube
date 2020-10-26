const axios = require('axios')

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

})

module.exports = {youtube};