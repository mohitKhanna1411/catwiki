import React  from 'react'
import { Link } from 'react-router-dom' 
import './Body.css'

export default function MostSearched() {

  return (
    <div className="top-ten">
      <div className="titles">
        <Link to="/top-10">
        <h3>Top 10 Breeds...</h3>
        </Link>
      </div>
     
    </div>
  )
}
