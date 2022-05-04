import React, { useEffect } from 'react'
import { Row,Col,Container, Navbar, Card, Button } from 'react-bootstrap'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct,info } from '../redux/actions/productActions'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.allProducts.product)

  

  useEffect(() => {

    dispatch(info(id));  
    
    
  }, [])

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            PRODUCT DETAIL
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col className='p-5 col-lg-6'>
            <Card style={{ width: '35rem'}} className="bg-light">
              <Card.Img style={{ width: '20rem', height: '25rem' }} variant="top" src={product.image} className="p-5" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="success">click me</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='p-5 col-lg-6'>
            <Card style={{ width: '35rem'}} className="bg-light">
              {/*<Card.Img style={{ width: '20rem', height: '25rem' }} variant="top" src="" className="p-5" />*/}
              <Card.Body>
                <Link to=""><Card.Title>ADD TO CART</Card.Title></Link>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>SELECT PAYMENT</Card.Text>
                <Button variant="success" className='bg-primary'>BUY {product.title}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default ProductDetail