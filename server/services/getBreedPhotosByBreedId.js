const axios = require("axios");

module.exports = getBreedPhotosByBreedId = async (numberOfPhotos, breedId) => {

    return await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numberOfPhotos}&breed_id=${breedId}`)

}