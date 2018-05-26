import { productReducer } from './product.reducer'

import { defaultProductState, IProduct } from './product'
import { PRODUCT_ACTION } from './product.action'

describe('productReducer', () => {

  const product: IProduct = {
    name: 'hop',
    price: 10,
    selected: false
  }

  it('should get products', () => {

    const result = productReducer(defaultProductState, {
      productList: [ product ],
      type: PRODUCT_ACTION.GET_PRODUCTS
    })

    expect(result).toEqual({ ...defaultProductState, productList: [ product ]})
  })

  it('should select a product', () => {
    const productState = { ...defaultProductState, productList: [ product ] }
    const result = productReducer(productState, {
      product,
      type: PRODUCT_ACTION.SELECT_PRODUCT
    })

    expect(result.productList[0].selected).toBe(true)
    expect(result.totalPrice).toBe(10)
  })

  it('should do nothing', () => {
    const result = productReducer(defaultProductState, { type: 'hop' })

    expect(result).toEqual(defaultProductState)
  })
})
