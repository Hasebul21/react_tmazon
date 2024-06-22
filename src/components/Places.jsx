import { useState, useEffect, useRef } from "react"

export default function Places({ userData}) {

  return (
    <div className="card">
      <h1>{userData.title}</h1>
      <img src={`http://localhost:3000/${userData.image.src}`} alt="Not found" />
      <p>
        <strong>Description:</strong> {userData.image.alt}
      </p>
    </div>
  )
}
