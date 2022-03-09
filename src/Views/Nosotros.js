import React from 'react'
import Header from '../components/header/header'
import imagen from '../assets/img/ayuda1.jpeg'
import Footer from '../components/Footer/Footer'
import Info from '../components/Info/Info'
import Accordion from 'react-bootstrap/Accordion'
import '../assets/style/style.css'
const Nosotros = () => {
  return (
    <div>
        <Header />

        
        <Info 
        Subtitle={"Sibtitulo"}
        Title={"Nosotros"}
        Parragraf='Parrafo'
        Img={imagen}
        
        />
         <div className='color'>
          <h1> Quienes somos</h1>
          
        </div>

        <div >
          <h1> Lo que la gete dice sobre Gaptos</h1>
          
        </div>
        <div className="contactos color">
          <h1> Contactanos</h1>

        </div>
        <h1>Preguntas Frecuentes</h1>

        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        <Footer />
    </div>

  )
}

export default Nosotros