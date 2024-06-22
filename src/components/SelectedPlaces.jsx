import { useEffect, useState } from 'react'
import Places from './Places'
export default function SelectedPlaces() {
  const [listOfplaces, setListOfPlaces] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/user-places')
      .then((response) => response.json())
      .then((data) => {
        setListOfPlaces([...listOfplaces, data.places])
      })
  }, [])

  return (
    <div>
      <h1>Selected Places</h1>
      <div className="places-container">
        <h3>Loading...</h3>
        {listOfplaces.map((p) => {
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