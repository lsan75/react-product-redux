import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { configure, shallow, ShallowWrapper } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import PriceList from './price-list'

import { productList } from '../../../mocks/helpers'

describe('PriceHeader', () => {
  configure({ adapter: new Adapter() })
  let shallowOutput: ShallowWrapper

  beforeEach(() => {
    shallowOutput = shallow(
      <PriceList products={productList} />
    )
  })

  afterEach(() => {
    shallowOutput.unmount()
  })

  it('should render', () => {
    expect(shallowToJson(shallowOutput)).toMatchSnapshot()
  })
})