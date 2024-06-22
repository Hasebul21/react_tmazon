import React, { useEffect, useState } from 'react'
import Places from './Places'
export default function AvailiablePlaces() {
  const [listOfplaces, setListOfPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    async function fechData() {
      setIsLoading(true)
      const response = await fetch('http://localhost:3000/places')
      const responseData = await response.json()
      setListOfPlaces(responseData.places)
      setIsLoading(false)
    }
    fechData();
  }, [])
  return (
    <div>
      <h1>Available Places</h1>
      <div className="places-container">
        {isLoading && listOfplaces.length == 0 && <h3>Loading...</h3>}
        {isLoading == false && listOfplaces.map((p) => {
          return (
            <div>
              <Places key={p.id}
                userData={p}
              ></Places>
            </div>
          )
        })}
      </div>
    </div>
  )
}
