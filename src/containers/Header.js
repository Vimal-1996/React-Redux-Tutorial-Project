import React, { useEffect } from 'react'
import "../styles/Header.css";
import { Nav, Navbar, Container, Carousel, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, removeAllProducts } from '../redux/actions/productActions';

const Header = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts.products)

  const fetchProducts = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then((resp) => {
        dispatch(setProducts(resp.data))
      })
      .catch((err) => { console.log('err', err) })
  }
  useEffect(() => {
    fetchProducts()
    return () => {
      dispatch(removeAllProducts())
    }
  }, [])
  const filtered = allProducts.filter((product)=>{
    return parseInt(product.id)%10==0
  }) 
  const list = filtered.map((allProduct) => {
    return (
      <Row className= " bg-light m-3">
        <Col className="col-lg-12 ">
          <Card className='bg-warning p-5 m-5'>
            <Card.Img variant="top"  src={allProduct.image} />
            <Card.Body>
              <Card.Text>
                {allProduct.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  })

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">PRODUCT STORE</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/list">PRODUCT LISTING</Nav.Link>
          <Nav.Link href="/detail">PRODUCT DETAILS</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
      {list}
      </Container>
    </div>


  )
}

export default Header