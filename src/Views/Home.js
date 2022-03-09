import React from 'react'
import Header from '../components/header/header'
import Landing from '../components/landing/landing'
import Footer from '../components/Footer/Footer.js'
import InHonor from '../components/InHonor/InHonor'
import Cards from '../components/cards/cards'
import Imagenes from '../components/carousel/Imagenes'
import imagen from '../assets/img/imgExample.png'
const Home = () => {
  return (
    <div>
        <Header />
        <Landing
         Title={"Gotas de amor para todos"}
         Subtitle={"GAPTOS"}
         Parragraf={'Porque de tal manera amó Dios al mundo que ha dado a su hijo unijenito para que todo el que en Él crea no se pierda más tenga vida eterna'}
         Boton={"Aportar mi gota"}
         Img={imagen}
         />
        <InHonor />
        <Cards />
        <Imagenes />
        <Footer />
    </div> 
  )
}

export default Home