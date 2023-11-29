function Banner({ image, text }) {
    return (
      
        <div className="containerCard">
          <img className="montagne" src={image} alt="paysage"  />
          <h2>{text}</h2>
        </div>
    )
}

export default Banner

