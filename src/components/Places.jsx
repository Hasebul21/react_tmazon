export default function Places({ name, image, price }) {
  console.log(name, image, price)
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image.src} alt={image.alt} />
      <p>
        <strong>Price:</strong> {price}
      </p>
    </div>
  )
}
