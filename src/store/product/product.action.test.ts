import mockAxios from 'jest-mock-axios'
import { IProduct } from './product'
import * as actions from './product.action'
import { PRODUCT_ACTION } from './product.action'

describe('ProductAction', () => {

  const product: IProduct = {
    name: 'hop',
    price: 10,
    selected: false
  }

  it('should get products', () => {
    const dispatch = jest.fn()

    actions.getProductsAction()(dispatch)
    mockAxios.mockResponse({ data: [ product ] })

    expect(dispatch).toBeCalledWith({
      productList: [ product ],
      type: PRODUCT_ACTION.GET_PRODUCTS
    })

    mockAxios.reset()
  })

  it('should select a product', () => {
    const result = actions.selectProductAction(product)

    expect(result).toEqual({
      product,
      type: PRODUCT_ACTION.SELECT_PRODUCT
    })
  })
})
