const axios = require("axios");

module.exports = getBreedInfoByBreedId = async (breedId) => {

    if (breedId)
        return await axios.get(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    else
        return await axios.get(`https://api.thecatapi.com/v1/breeds`)

}