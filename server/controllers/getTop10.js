const getBreedInfoByBreedId = require("../services/getBreedInfoByBreedId");
const getBreedPhotosByBreedId = require("../services/getBreedPhotosByBreedId");


let getTop10 = async (req, res) => {
    try {
        const r = await getBreedInfoByBreedId();

        // filtering out first 10 records
        const top10 = r.data.slice(0, 10)

        const response = []

        for (i = 0; i < top10.length; i++) {
            const r = await getBreedPhotosByBreedId(1, top10[i].id)

            const breedInfo = {
                id: top10[i].id,
                name: top10[i].name,
                description: top10[i].description,
                photo_url: r.data[0].url,
            }
            response.push(breedInfo)
        }
        res.status(200).send(response)
    } catch (err) { console.log(err) }
}

module.exports = getTop10