import * as React from 'react'

export interface IProps {
  totalPrice: number
}

export default function PriceHeader(props: IProps) {
  return (
    <article className="TotalPrice">
      <h2 className="TotalPrice__Title">Total</h2>
      <span className="TotalPrice__Value">{ props.totalPrice } &euro;</span>
    </article>
  )
}