import { useState, useEffect, useRef } from "react"

export default function Places({ userData }) {
  const [selected, setSelected] = useState(false)
  const isMounted = useRef(false);
  function removePlace() {
    console.log('Remove place');
  }
  useEffect(() => {
    if (isMounted.current == false) {
      isMounted.current = true;
      return;
    }
    async function updateData() {
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ places: userData })
      })
      const responseData = await response.json()
      console.log(responseData)
      removePlace();
    }
    updateData()
  }, [selected])

  return (
    <div className="card">
      <h1>{userData.title}</h1>
      <img src={`http://localhost:3000/${userData.image.src}`} alt="Not found" />
      <p>
        <strong>Description:</strong> {userData.image.alt}
      </p>
      <button type='button' onClick={() => setSelected(!selected)}>Book</button>
    </div>
  )
}
