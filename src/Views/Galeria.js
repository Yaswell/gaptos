import React from 'react'
import Imagenes from '../components/carousel/Imagenes'
import Footer from '../components/Footer/Footer'
import Hearder from '../components/header/header'

const Galeria = () => {
  return (
    <div>
        <Hearder />
        <Imagenes />
        <h1>Galería</h1>
        <Footer />
    </div>
  )
}

export default Galeria