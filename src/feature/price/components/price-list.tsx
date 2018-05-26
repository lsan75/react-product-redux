import * as React from 'react'
import { IProduct } from '../../../store/product/product'

export interface IProps {
  products: IProduct[]
}

export default function PriceList(props: IProps) {

  const items = props.products.map(product => {
    return (
      <li key={product.name} className="PriceList__Item">
        <strong className="PriceList__Item__Name">{ product.name }</strong>
        <span className="PriceList__Item__Price">{ product.price } &euro;</span>
      </li>
    )
  })

  return (
    <ul className="PriceList">
      {items}
    </ul>
  )
}