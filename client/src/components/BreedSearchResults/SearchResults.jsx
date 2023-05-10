
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BreedSummary from './BreedSummary/BreedSummary.jsx'
import OtherPhotos from './OtherPhotos/OtherPhotos.jsx'
import LoadingPage from '../LoadingPage/LoadingPage'

export default function SearchResults() {
  const [isLoading, setIsLoading] = useState(true)
  const { breedName } = useParams()
  const [photos, setPhotos] = useState(['', ''])
  const [breedInfo, setBreedInfo] = useState({
    photos: ['', ''],
    name: '',
    description: '',
    temperament: '',
    origin: '',
    life_span: '',
    adaptability: '',
    affection_level: '',
    child_friendly: '',
    grooming: '',
    intelligence: '',
    health_issues: '',
    social_needs: '',
    stranger_friendly: '',
  })

  useEffect(() => {
    fetch(`/api/v1/breeds/${breedName}`)
      .then(res => res.json())
      .then(data => {
        setBreedInfo(data)
        const permPhotos = data.photos
        setPhotos(permPhotos)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [breedName])


  //Check if there is an error
  //If error (cat does not exist), show error page
  //If not error, show cat info 
  return isLoading ? <LoadingPage /> : (
    <div className="search-results">
      <BreedSummary breedInfo={breedInfo} breedName={breedName} />
      <OtherPhotos photos={photos} breedName={breedName} />
    </div>
  )
}