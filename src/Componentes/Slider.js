import React from 'react'
import '../estilos/slider.css';
import Slider_1 from '../imagenes/slider_1.jpeg'
import Slider_2 from '../imagenes/slider_2.jpeg'
import Slider_3 from '../imagenes/slider_3.jpeg'
import Slider_4 from '../imagenes/slider_4.jpeg'

function Slider() {
  return (
    <div className='slider'>
        <ul>
            <li><img src={Slider_1} alt=""/></li>
            <li><img src={Slider_2} alt=""/></li>
            <li><img src={Slider_3} alt=""/></li>
            <li><img src={Slider_4} alt=""/></li>
        </ul>
    </div>
  )
}

export default Slider