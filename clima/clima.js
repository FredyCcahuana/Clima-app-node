const axios = require('axios');
const getClima = async(latitud, longitud) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=64bfd0399185df01ede01c427f091cc0&units=metric`)
    return resp.data.main.temp;
};

module.exports = {
    getClima
};