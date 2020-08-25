const axios = require('axios');

const getLugarLatlng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=${encodedUrl}&json=1`
    });
    /* SIN ASYNC Y AWAIT
    instance.get()
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log('error!!!', err);
        });
    */
    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data;
    const direccion = resp.data.standard.city;
    const lat = data.latt;
    const lng = data.longt;
    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatlng
}