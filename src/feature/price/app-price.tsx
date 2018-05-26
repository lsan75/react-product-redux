import * as React from 'react'
import { connect } from 'react-redux'
import { IStore } from '../../store/root'

import { IProduct } from '../../store/product/product'
import PriceHeader from './components/price-header'
import PriceList from './components/price-list'

import './price-list.css'

export interface IProps {
  productList: IProduct[]
  totalPrice: number
}

export class AppPrice extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className="Wrapper">
        <PriceHeader totalPrice={this.props.totalPrice} />
        <PriceList products={this.props.productList} />
      </div>
    )
  }
}

function mapStateToProps(state: IStore) {
  return {
    productList: state.productReducer.productList.filter(product => product.selected),
    totalPrice: state.productReducer.totalPrice
  }
}

export default connect<IProps>(
  mapStateToProps
)(AppPrice)
