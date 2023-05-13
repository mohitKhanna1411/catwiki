import React from 'react'
import Stats from './SummaryContent/Stats.jsx'
import Photo from './SummaryContent/Photo.jsx'
import './BreedSummary.css'

export default function BreedSummary(props) {
  return (
    <div className="breed-summary">
      <Photo photo={props.breedInfo.photos}/>
      <div className="right">
        <h1>{props.breedInfo.name}</h1>
        <p>{props.breedInfo.description}</p>
        <Stats stats={props.breedInfo}/>
      </div>
    </div>
  )
}
