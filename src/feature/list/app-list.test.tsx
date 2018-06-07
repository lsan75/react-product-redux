import * as React from 'react'
import * as Redux from 'redux'
import * as createMockStore from 'redux-mock-store'

import * as Adapter from 'enzyme-adapter-react-16'

import { configure, mount, ReactWrapper, shallow, ShallowRendererProps, ShallowWrapper } from 'enzyme'

import { shallowToJson } from 'enzyme-to-json'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import ConnectedContainer, { IProps } from './app-list'

import { productList } from './helpers'

describe('AppList', () => {
  configure({ adapter: new Adapter() })

  const middleware: Redux.Middleware[] = [ thunk ]
  const mockStore = createMockStore(middleware)
  const store = mockStore({
    productReducer: {
      productList,
      totalPrice: 0
    }
  })
  const props: ShallowRendererProps = {
    context: { store }
  }
  let reactOutput: ReactWrapper<IProps>
  let shallowOutput: ShallowWrapper<IProps>


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
  })

  it('renders without crashing', () => {
    const innerProps: IProps = shallowOutput.props()

    expect(shallowToJson(shallowOutput)).toMatchSnapshot()
    expect(innerProps.productList).toEqual(productList)
  })

  it('should select a product', () => {

    reactOutput.find('ul').childAt(0).simulate('click')

    const actions = store.getActions()
    expect(actions).toContainEqual({
      product: {
        name: 'aaa',
        price: 10,
        selected: true
      },
      type: 'PRODUCT_ACTION.SELECT_PRODUCT'
    })
  })
})