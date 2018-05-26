import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { IProduct } from '../../store/product/product'
import { IStore } from '../../store/root'

import { getProductsAction, selectProductAction } from '../../store/product/product.action'
import { IProductActionType } from '../../store/product/product.reducer'
import { ProductList } from './components/product-list'

export interface IMapProps {
  productList: IProduct[]
}

export interface IDispatchProps {
  getProducts: () => void
  selectProduct: (product: IProduct) => IProductActionType
}

export type IProps = IMapProps & IDispatchProps

export class AppList extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props)
  }

  public componentDidMount() {
    this.props.getProducts()
  }

  public render() {
    return (
      <ProductList
        productList={this.props.productList}
        selectProduct={this.props.selectProduct}
      />
    )
  }
}

function mapStateToProps(state: IStore) {
  return {
    productList: state.productReducer.productList
  }
}

function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>) {
  return {
    getProducts: () => dispatch( getProductsAction() ),
    selectProduct: (product: IProduct) => dispatch( selectProductAction(product) )
  }
}

export default connect<IMapProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(AppList)
