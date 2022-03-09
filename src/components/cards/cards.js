import React from 'react'
import {Card,CardGroup } from 'react-bootstrap'
import './cards.css'
import mision from '../../assets/img/valores.png';
import vision from '../../assets/img/objetivo.png';
import valores from '../../assets/img/coraje.png';

const cards = () => {
  return (
    <div className='cardDiv'>
       <div className='card'>
           <img src={mision} alt ='mision' />
           <h3>Mision</h3>
           <p>Identificar familiares con necesidades básica y enfermedades crónicas que sienten su luz apagada. Con los recursos de Gotas de amor para Todos ayudaremos a cubrir las necesidades básicas para la vida y dar felicidad al desamparado.</p>
       </div>
       <div className='card' id='vision'>
           <img src={vision} alt ='vision' />
           <h3>Vision</h3>
           <p>Transformar familias y personas más felices, ayudaremos a sobrevivir en medio de las tormentas.</p>
       </div>
       <div className='card' id='valores'>
           <img src={valores} alt ='valores' />
           <h3>Valores</h3>
           <p>•	Amor
•	Gratitud
•	Integridad  

•	Humildad</p>
       </div>
    </div>
  )
}

export default cards