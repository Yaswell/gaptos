import React from 'react'
import Info from '../components/Info/Info'
import Header from '../components/header/header'
import imagen from '../assets/img/img.jpeg'
import Footer from '../components/Footer/Footer'
import {Button, Card, CardGroup, Form, Row, Col} from 'react-bootstrap'
import PaymentForm from '../components/PaymentForm/PaymentForm'
const Donaciones = () => {
  return (
    <div>
        <Header />
        <Info Subtitle={"Aportar mi gota"} Title={"Aprende cómo"} 
        Parragraf={"El valor 100 en este ejemplo es la longitud de letras que tendrá este texto generado. Podemos cambiarlo por otro valor para adaptarlo a lo que necesitemos."}
        Img={imagen} />
        <div className='donacion'> 
        <h1>¿Cómo aportar tu gota?</h1>
        <h3>Selecciona el proyecto con el que deseas aportar </h3>

        <PaymentForm />

        <Form>

          <div key={`default-radio`} className="mb-3">
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Alimentos Canasta familiar`}
                name={'eca'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Medicamentos`}
                name={'eca'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Ropa`}
                name={'eca'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Aporte Costo de Equipos médicos`}
                name={'eca'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Aporte reparaciones menores de viviendas`}
                name={'eca'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Aporte Finalizar Estudios`}
                name={'eca'}
              />

            
            </div>
        
        </Form>

          <h3>Selecciona</h3>

          <Form>
            
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="5"
                  name="group1"
                  type={'radio'}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="10"
                  name="group1"
                  type={'radio'}
                  id={`inline-radio-2`}
                />
                <Form.Check
                  inline
                  label="25"
                  name="group1"
                  type={'radio'}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Otra"
                  name="group1"
                  type={'radio'}
                  id={`inline-radio-2`}
                />

               <Button>Continuar</Button>
               <h3>Seleccione el metodo de pago</h3>

              </div>
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Donación mediante Tarjeta de débito/crédito`}
                name={'transferencia'}
              />
              <Form.Check 
                type={'radio'}
                id={`default-radio}`}
                label={`Donación mediante transferencia bancaria`}
                name={'transferencia'}
              />

              <h4>Informacion personal</h4>

              
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nombre</Form.Label>
      <Form.Control  placeholder="Lucas" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Apellido</Form.Label>
      <Form.Control  placeholder="Jonson" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>

<h4>Informacion de la tarjeta de credito/debito</h4>


          </Form>


        </div>
        <div>
          <h1>¿Qué más puedo donar? </h1>
          <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
        <Footer />
        </div>
  )
}

export default Donaciones