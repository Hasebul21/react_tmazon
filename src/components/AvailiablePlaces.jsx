import React, { useState } from 'react'
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
  const [listOfplaces, setListOfPlaces] = useState(initialPlaces)
  console.log(listOfplaces)
  return (
    <div>
      <h1>Available Places</h1>
      <div className="places-container">
        {listOfplaces.map((p) => {
          return (
            <Places
              name={p.name}
              image={p.image}
              price={p.price}
              key={p.name}
            ></Places>
          )
        })}
      </div>
    </div>
  )
}
