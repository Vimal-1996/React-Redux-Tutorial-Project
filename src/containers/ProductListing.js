import React, { useId } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts,fetchProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            PRODUCT LISTING
          </Navbar.Brand>
        </Container>
      </Navbar>   
      <ProductComponent/>
    </div>

  )
}

export default ProductListing