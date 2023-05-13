import React, { useState, useEffect} from 'react'
import Header from './Header/Header.jsx'
import Description from './Description/Description.jsx'
import LoadingPage from '../LoadingPage/LoadingPage.jsx'

function Top10() {
  const [isLoading, setIsLoading] = useState(true)
  const [top10, setTop10] = useState([{
    id: '',
    name : '',
    photo_url: '', 
    description: ''
  }])

  useEffect(() => {
    fetch('/api/v1/top10')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTop10(data)
        setIsLoading(false)
      })
  }, [])

  return isLoading? <LoadingPage />: (
    <div className="top-10">
      <Header />
      <Description top10={top10} />
    </div>
  );
}

export default Top10