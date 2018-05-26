import axios from 'axios'
import { Dispatch } from 'react-redux'

import { IProduct } from './product'
import { IProductActionType } from './product.reducer'

export const PRODUCT_ACTION = {
  GET_PRODUCTS: 'PRODUCT_ACTION.GET_PRODUCTS',
  SELECT_PRODUCT: 'PRODUCT_ACTION.SELECT_PRODUCT'
}

export const getProductsAction = () => {
  return (dispatch: Dispatch<IProductActionType>) => {

    axios.get('http://localhost:9000/products').then(productList => {
      dispatch({
        productList: productList.data,
        type: PRODUCT_ACTION.GET_PRODUCTS
      })
    })
  }
}

export const selectProductAction = (product: IProduct) => {
  return {
    product,
    type: PRODUCT_ACTION.SELECT_PRODUCT
  }
}
