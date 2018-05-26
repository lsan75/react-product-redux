export interface IProduct {
  name: string
  price: number
  selected?: boolean
}

export interface IProductState {
  productList: IProduct[]
  totalPrice: number
}

export const defaultProductState: IProductState = {
  productList: [],
  totalPrice: 0
}
