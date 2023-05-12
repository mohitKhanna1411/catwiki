const axios = require("axios");


let getTop10 = async (req, res) => {
    try {
        const r = await axios.get('https://api.thecatapi.com/v1/breeds')

        // filtering out first 10 records
        const data = r.data.slice(0, 10)

        const response = []

        for (i = 0; i < data.length; i++) {
            const r = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=1&breed_id=${data[i].id}`)

            console.log(r);
            const breedInfo = {
                id: data[i].id,
                name: data[i].name,
                description: data[i].description,
                photo_url: r.data[0].url,
            }
            response.push(breedInfo)
        }
        console.log(response);
        res.status(200).send(response)
    } catch (err) { console.log(err) }
}

module.exports = getTop10