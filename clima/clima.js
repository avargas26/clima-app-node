const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a33d8d1e2734770d3deda2df2762ec9e`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}