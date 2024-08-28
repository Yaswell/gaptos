import React from "react";
import Header from "../components/header/header.js";
import Landing from "../components/landing/landing.js";
import Footer from "../components/Footer/Footer.js";
import InHonor from "../components/InHonor/InHonor.js";
import Cards from "../components/cards/cards.js";
import Imagenes from "../components/carousel/Imagenes.js";
import imagen from "../assets/img/imgExample.png";
const Home = () => {
  return (
    <div>
      <Header />
      <Landing
        Title={"Gaptos"}
        Subtitle={"Gotas de amor para todos"}
        Parragraf={
          "Porque de tal manera amó Dios al mundo que ha dado a su hijo unijenito para que todo el que en Él crea no se pierda más tenga vida eterna"
        }
        Boton={"Aportar mi gota"}
        Img={imagen}
        Address="/donaciones"
      />
      <InHonor />
      <Cards />
      <Imagenes />
      <Footer />
    </div>
  );
};

export default Home;
