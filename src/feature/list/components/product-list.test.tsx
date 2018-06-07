import * as React from 'react'

import * as Adapter from 'enzyme-adapter-react-16'

import { configure, mount, ReactWrapper } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'

import { IProps, ProductList } from './product-list'

import { productList } from '../helpers'

describe('ProductList', () => {
  configure({ adapter: new Adapter() })
  let reactOutput: ReactWrapper

  const selectProduct = jest.fn()

  const mountComp = () => {
    return mount<IProps>(
      <ProductList
        productList={productList}
        selectProduct={selectProduct}
      />
    )
  }

  afterEach(() => {
    reactOutput.unmount()
  })

  it('should match the snapshot', () => {
    reactOutput = mountComp()
    expect(mountToJson(reactOutput)).toMatchSnapshot()
  })

  it('should select a product', () => {
    reactOutput = mountComp()
    const li = reactOutput.find('ul').childAt(1)

    li.simulate('click')

    expect(selectProduct).toBeCalledWith({
      name: 'bbb',
      price: 20,
      selected: false
    })
  })
})
