import React, { useEffect, useState } from 'react'
import Places from './Places'
import { useDispatch } from 'react-redux';
export default function AvailiablePlaces() {
  const [listOfAvailablePlaces, setListOfPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();
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

  const addPlaces = (places) => {
    console.log(places);
    dispatch({
      type: 'ADD_PLACES',
      payload: places
    })
  }
  return (
    <div>
      <h1>Available Places</h1>
      <div className="places-container">
        {isLoading && listOfAvailablePlaces.length == 0 && <h3>Loading...</h3>}
        {isLoading == false && listOfAvailablePlaces.map((p) => {
          return (
            <div>
              <Places key={p.id}
                userData={p}
              ></Places>
              <button type='button' onClick={()=>addPlaces(p)}>Book</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
