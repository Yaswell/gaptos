import React, {useState} from 'react'
import './PaymentForm.css'
//import 'react-credit-cards/es/styles-compiled.css'
//import Cards from 'react-credit-cards'

const PaymentForm = () => {
    const [state, setState] = useState({
        number:"",
        name:"",
        expire:"",
        cvc:"",
        focus:"",

    })
    const handelInputChange =(e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value

        })
    }

    const handelFocusChange = (e) =>{
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const processPayment = () =>{
        console.log("Number => ", state.number)
        console.log("Nombre => ", state.name)
        console.log("Expiración => ", state.expire)
        console.log("CVC => ", state.cvc)
        console.log(JSON.stringify(state))
    }
  return (
    <div className='layout'>
   <div className='card'>
       <div className='card-body'>
       {/* <Cards
        number={state.number}
        name={state.name}
        expiry={state.expire}
        cvc={state.cvc}
        focused={state.focus}
        /> */}
       </div>
        <form>
            <div className='form-group'>
                <label htmlFor='number'>Número de la tarjeta </label>
                <input 
                type='text'
                name='number'
                id='number'
                maxLength='16'
                className='form-control'
                onChange={handelInputChange}
                onFocus={handelFocusChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Nombre </label>
                <input 
                type='text'
                name='name'
                id='name'
                maxLength='30'
                className='form-control'
                onChange={handelInputChange}
                onFocus={handelFocusChange}
                />
            </div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <label htmlFor='expire'>Fecha de expiración </label>
                    <input 
                    type='text'
                    name='expire'
                    id='expire'
                    maxLength='4'
                    className='form-control'
                    onChange={handelInputChange}
                    onFocus={handelFocusChange}
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='cvc'>CVC </label>
                    <input 
                    type='text'
                    name='cvc'
                    id='cvc'
                    maxLength='4'
                    className='form-control'
                    onChange={handelInputChange}
                    onFocus={handelFocusChange}
                    />
                </div>
            </div>
            <button onClick={processPayment} type='button'  className='btn btn-success btn-block btn-lg'>Donar</button>
        </form>
   </div>
   </div>
  )
}

export default PaymentForm