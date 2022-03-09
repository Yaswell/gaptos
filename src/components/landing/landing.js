import React from 'react'
import './landing.css'
import {Button} from 'react-bootstrap'

const landing = ({Subtitle, Title, Parragraf, Img, Boton}) => {
  return (
    <div className='landing'>
        <div className='landingText'>
            <h3>{Subtitle}</h3>
            <h1>{Title}</h1>
            <p>{Parragraf}</p>

            <Button href="#">{Boton} </Button> 
        </div>
        <div className='landingImg'>
            <img src={Img} alt={Title} />
            
        </div>
    </div>
  )
}

export default landing