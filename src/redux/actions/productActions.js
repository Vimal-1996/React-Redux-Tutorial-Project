import { actionTypes } from "../constants/productTypes";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

export const info = (id)=>{
    return async(dispatch,getState)=>{
        await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => { console.log(err) })
      .then((resp) => {dispatch({type:actionTypes.SELECTED_PRODUCT, payload:resp.data})})
    }
}


export const fetchProducts = ()=>{
    
    return async (dispatch,getState)=>{
        await axios.get('https://fakestoreapi.com/products')
        .then((response)=>{    
            dispatch({type:actionTypes.FETCH_PRODUCTS, payload:response.data})
        })
         
    }
}

export const setProducts = (products)=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = ()=>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const removeAllProducts = ()=>{
    return{
        type:actionTypes.REMOVE_ALL_PRODUCTS
    }
}