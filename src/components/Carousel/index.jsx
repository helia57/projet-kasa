
import React, { useState } from 'react'
import datas from "../../assets/Logements/Datas"
import BtnSlider from "../BtnSlider"



export default function Slider () {
 

  const [slideIndex, setSlideIndex] = useState (1)

  const nextSlide = () => {
      if (slideIndex !== datas.length) {
        setSlideIndex(slideIndex + 1)
      }
      else if (slideIndex === datas.length) {
        setSlideIndex(1)
    }
  }

  const prevSlide = () => {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1) {
        setSlideIndex(datas.length)
    }
  }

  const moveDot = index => {
    setSlideIndex (index)
  }
  

  return (

    <div className='container-Slider'>

      {datas.map((data) => {

        return (
            <div 
            key={data.id} 
            className={slideIndex === + 1 ? 'slide active-anim' : 'slide' }
            
            >
            
               
              <img 
              src={data.pictures}
              alt='appartement'
              className='slide'
              />
            </div>
        )      
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} 
      />

      <BtnSlider moveSlide={prevSlide} direction={'prev'} 
      />
      <div className='container-dots'>
        {Array.from({length: 3}).map((item,index) => (
          <div
          onClick={() => moveDot(index + 1)}
          className={datas === index ? "dot active" :"dot"}
        

          ></div>
        ))}
    </div>
    </div>
  )
}