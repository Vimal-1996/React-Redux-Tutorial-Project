import React from 'react'
import { Button, Card, Navbar, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)

  const renderedLists = products.map((prod) => {
    return (

      <Link to={`/detail/${prod.id}`}>

        <Row>
          <Col className='p-5 bg-light text-white col-lg-12'>
            <Card style={{ width: '15rem', height: '65rem' }} className="bg-dark">
              <Card.Img variant="top" src={prod.image} className="p-5" />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>{prod.price}</Card.Text>
                <Card.Text>{prod.description}</Card.Text>
                <Button variant="success">click me</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Link>

    )
  })





  return (
    <div>
      <Container>
        <Row>
         
          {renderedLists}
         
          
        </Row>
      </Container>
    </div>
  )




}

export default ProductComponent