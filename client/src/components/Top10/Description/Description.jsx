import React from 'react'
import { Link } from 'react-router-dom'
import './Description.css'


export default function Description(props) {
    console.log(props);

    const searchResult = (obj, i) => {
        console.log(obj);
    return (
      <div className="search-result" key={i}>
        <Link to={`/breeds/search/${obj.id}`}>
          <img src={obj.photo_url} alt=""/>
        </Link>
        <div className="text">
          <h3>{`${i + 1}. ${obj.name}`}</h3>
          <p>
          {obj.description}
          </p>
        </div>
      </div>
    )
  } 

  return (
    <div className="top-10-description">
      {props.top10.map((obj, index) => {
        return searchResult(obj, index)
      })}
    </div>
  )
}

