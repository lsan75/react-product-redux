import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import { configure, shallow, ShallowWrapper } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import PriceHeader from './price-header'

describe('PriceHeader', () => {
  configure({ adapter: new Adapter() })
  let shallowOutput: ShallowWrapper

  beforeEach(() => {
    shallowOutput = shallow(
      <PriceHeader totalPrice={100} />
    )
  })

  afterEach(() => {
    shallowOutput.unmount()
  })

  it('should render', () => {
    expect(shallowToJson(shallowOutput)).toMatchSnapshot()
  })
})