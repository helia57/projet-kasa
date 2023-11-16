import PropTypes from 'prop-types'


function gallery({title}) {
    return (
        <ul className="containerGallery">
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
            <li><span>{title}</span></li>
        </ul>
    )
}

gallery.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
  
gallery.defaultProps = {
    label: '',
    title: '',
    
}

export default gallery