import { useEffect, useState } from 'react'
import Places from './Places'
import { useSelector } from 'react-redux';
export default function SelectedPlaces() {
  const  listOfPlaces = useSelector((state) => state.listOfPlaces);

  return (
    <div>
      <h1>Selected Places</h1>
      <div className="places-container">
        <h3>Loading...</h3>
        {listOfPlaces && listOfPlaces.map((p) => {
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