import * as React from 'react'
import * as createMockStore from 'redux-mock-store'

import * as Adapter from 'enzyme-adapter-react-16'

import { configure, mount, ReactWrapper, shallow, ShallowRendererProps, ShallowWrapper } from 'enzyme'

import { mountToJson, shallowToJson } from 'enzyme-to-json'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import ConnectedContainer, { IProps } from './app-price'

import { productList } from '../../mocks/helpers'

describe('AppList', () => {
  configure({ adapter: new Adapter() })

  // @ts-ignore
  const mockStore = createMockStore([ thunk ])
  const store = mockStore({
    productReducer: {
      productList,
      totalPrice: 10
    }
  })
  const props: ShallowRendererProps = {
    context: { store }
  }
  let shallowOutput: ShallowWrapper<IProps>
  let reactOutput: ReactWrapper<IProps>


  beforeEach(() => {
    reactOutput = mount<IProps>(
      <Provider store={store}>
        <ConnectedContainer />
      </Provider>
    )
    shallowOutput = shallow<IProps>(
      <Provider store={store}>
        <ConnectedContainer />
      </Provider>
    ).dive(props)
  })

  afterEach(() => {
    store.clearActions()
    shallowOutput.unmount()
    reactOutput.unmount()
  })

  it('renders without crashing', () => {
    const innerProps: IProps = shallowOutput.props()

    expect(shallowToJson(shallowOutput)).toMatchSnapshot()
    expect(mountToJson(reactOutput)).toMatchSnapshot()
    expect(innerProps.productList).toEqual([{
      name: 'aaa',
      price: 10,
      selected: true
    }])
    expect(innerProps.totalPrice).toBe(10)
  })

})
