import logoFooter from '../../assets/logoFooter.svg'

function Footer() {
    return (
        <div className="containerFooter">
          <img className="imageFooter" src={logoFooter} alt="logo kasa noir"  />
          <h5>© 2020 Kasa. All rights reserved</h5>
        </div>
    )
}

export default Footer 