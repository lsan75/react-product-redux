import { productReducer } from './product.reducer'

import { defaultProductState } from './product'
import { PRODUCT_ACTION } from './product.action'

import { productList } from '../../mocks/helpers'

describe('productReducer', () => {

  it('should get products', () => {

    const result = productReducer(defaultProductState, {
      productList,
      type: PRODUCT_ACTION.GET_PRODUCTS
    })

    expect(result).toEqual({ ...defaultProductState, productList})
  })

  it('should select a product', () => {
    const productState = { ...defaultProductState, productList }
    const result = productReducer(productState, {
      product: {
        name: 'bbb',
        price: 20,
        selected: false
      },
      type: PRODUCT_ACTION.SELECT_PRODUCT
    })

    expect(result.productList[1].selected).toBe(true)
    expect(result.totalPrice).toBe(30)
  })

  it('should do nothing', () => {
    const result = productReducer(defaultProductState, { type: 'hop' })

    expect(result).toEqual(defaultProductState)
  })
})
