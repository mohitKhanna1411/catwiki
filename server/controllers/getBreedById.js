const isEmpty = require('../helpers/helper');
const getBreedInfoByBreedId = require('../services/getBreedInfoByBreedId');
const getBreedPhotosByBreedId = require("../services/getBreedPhotosByBreedId");

let getBreedById = async (req, res) => {

    const breedName = req.params.name

    const r = await getBreedInfoByBreedId(breedName)
    const obj = r.data;
    console.log(obj)
    if (isEmpty(obj)) {
        res.status(404).send("Not Found")
    } else {
        //Extract only the necessary data 
        const breedInfo = {
            id: obj.id,
            name: obj.name,
            description: obj.description,
            temperament: obj.temperament,
            origin: obj.origin,
            life_span: obj.life_span,
            adaptability: obj.adaptability,
            affection_level: obj.affection_level,
            child_friendly: obj.child_friendly,
            grooming: obj.grooming,
            intelligence: obj.intelligence,
            health_issues: obj.health_issues,
            social_needs: obj.social_needs,
            stranger_friendly: obj.stranger_friendly,
            photos: [],
        }

        //Get breed ID in order to fetch photos
        const breedId = breedInfo.id

        const photosObj = await getBreedPhotosByBreedId(8, breedId);

        //Extract photos from object and store into breedInfo obj
        breedInfo.photos = photosObj.data.map(obj => obj.url)

        //Send entire breedInfo object back 
        res.status(200).send(breedInfo)
    }
}

module.exports = getBreedById;