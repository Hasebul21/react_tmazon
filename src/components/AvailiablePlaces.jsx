import React, { useEffect, useState } from 'react'
import Places from './Places'
const initialPlaces = [
  {
    name: 'Sylhet',
    image: 'https://www.google.com',
    price: 100,
  },
  {
    name: 'Ramna Park',
    image: 'https://www.google.com',
    price: 100,
  },
  {
    name: 'Coxs Bazar',
    image: 'https://www.google.com',
    price: 100,
  },
]
export default function AvailiablePlaces() {
  const [listOfplaces, setListOfPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(true)
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
            <Places
              {...p}
            ></Places>
          )
        })}
      </div>
    </div>
  )
}
