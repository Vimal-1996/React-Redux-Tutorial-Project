import { actionTypes } from '../constants/productTypes'

const initialState = {
    products: [],
    product: []
}
export const productReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: actions.payload }
            break;
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, product: actions.payload }
            break;
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
            break;
        case actionTypes.REMOVE_ALL_PRODUCTS:
            return { ...state, products: [] }
            break;
        case actionTypes.FETCH_PRODUCTS:
            return { ...state, products: actions.payload }
            break;
        default:
            return state;
    }
}