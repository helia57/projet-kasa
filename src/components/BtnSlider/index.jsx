import React from "react";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";



export default function BtnSlider ({direction,moveSlide}) {
 
    return (
        <button 
            onClick= {moveSlide}
            className= {direction === 'next' ? 'Btn-slide next' : 'btn-slide prev'}
        >


            <img 
            src={direction === 'next' ? rightArrow: leftArrow } alt='direction'/>
            
        </button>

    )
}
