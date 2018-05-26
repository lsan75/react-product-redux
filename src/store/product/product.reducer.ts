import { Action } from 'redux'

import { defaultProductState, IProduct, IProductState } from './product'
import { PRODUCT_ACTION } from './product.action'

export interface IProductActionType extends Action {
  product?: IProduct
  productList?: IProduct[]
}

export function productReducer(
  state: IProductState = defaultProductState,
  action: IProductActionType
): IProductState {

  let productList: IProduct[]

  switch (action.type) {

    case PRODUCT_ACTION.GET_PRODUCTS:
      return { ...state, productList: action.productList || [] }

    case PRODUCT_ACTION.SELECT_PRODUCT:
      productList = JSON.parse(JSON.stringify(state.productList))

      productList = productList.map((product: IProduct) => {
        if (product.name === (action.product ? action.product.name : null) ) {
          product.selected = !product.selected
        }
        return product
      })

      const totalPrice = productList.reduce((acc: number, product: IProduct) => {
        if (product.selected) {
          return acc += product.price
        }
        return acc
      }, 0)

      return { ...state, totalPrice, productList }

    default:
      return state
  }
}
