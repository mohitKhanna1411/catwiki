import React, { useState, useEffect } from 'react'
import Header from './Header/Header.jsx'
import LoadingPage from '../LoadingPage/LoadingPage'
import Body from './Body/Body.jsx'
export default function Homepage() {
  const [isLoading, setIsLoading] = useState([true, true])
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('/api/v1/breeds')
      .then(res => res.json())
      .then(data => {
        setNames(data.names)
        setIsLoading(false)
      })
  }, [])

  return isLoading ? <LoadingPage /> : (
    <div className="HomePage">
      <Header names={names} />
      <Body />
    </div>
  )
}
