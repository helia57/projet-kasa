import React from "react";
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/Accomodation/${id}`} className="gallery_cards">
			<img src={cover} className="flat" alt={title} />
            <div className="title-wrapper">
			    <h4>{title}</h4>
            </div>	
		</Link>
	)
}