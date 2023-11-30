function Banner({ image, text }) {
    return (
      
        <div className="containerCard">
          <img className="montagne" src={image} alt="paysage"  />
          <h1>{text}</h1>
        </div>
    )
}

export default Banner

