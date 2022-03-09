import React from 'react'

import './Info.css'
const Info = ({Subtitle, Title, Parragraf, Img}) => {
  return (
    <div className="Info">
        <div className='InfoText'>
            <h3>{Subtitle} </h3>
            <h1>{Title}</h1>
            <p>{Parragraf}</p>

            
        </div>
        <div className='InfoImg'>
            <img src={Img} alt={Title} />
            
        </div>

    </div>
  )
}
Info.defaultProps = {
    Subtitle :"",
    Title: "",
    Boton: "",
    Parragraf:"",
    Img: ""
}

export default Info