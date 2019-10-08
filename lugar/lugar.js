const axios = require('axios');

const getLugarLatLng = async(dir) => {
    //CONVIERTE EN URL SEGURO CON CARTERES ESPECIALES
    const encodeUrl = encodeURI(dir);
    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '9dbc325d35msh24a588a32b40dbap16a0fbjsn295221793933' }
    });
    const resp = await instancia.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
};

module.exports = {
    getLugarLatLng
}