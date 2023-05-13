const getBreedInfoByBreedId = require('../services/getBreedInfoByBreedId')

let getBreeds = async (req, res) => {

    const r = await getBreedInfoByBreedId();
    const names = r.data.map(breed => ({ name: breed.name, id: breed.id }))
    res.status(200).send({ names })
}

module.exports = getBreeds;