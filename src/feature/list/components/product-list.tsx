import * as React from 'react'
import { IProduct } from '../../../store/product/product'

import './product-list.css'

export interface IProps {
  productList: IProduct[]
  selectProduct: (product: IProduct) => void
}

export function ProductList(props: IProps) {

  const productItems = props.productList.map(item => {
    const className = `ProductList__Item ${ item.selected ? 'selected' : ''}`
    const click = () => props.selectProduct(item)
    return (
      <li key={item.name} className={className} onClick={click}>
        <strong className="ProductList__Item__Name">{item.name}</strong>
        <span className="ProductList__Item__Price">{item.price}&euro;</span>
      </li>
    )
  })

  return (
    <ul className="ProductList">
      {productItems}
    </ul>
  )
}