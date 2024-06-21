export default function Places({ title, image}) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={`http://localhost:3000/${image.src}`} alt="Not found" />
      <p>
        <strong>Description:</strong> {image.alt}
      </p>
    </div>
  )
}
