import { defaultProductState, IProductState } from './product/product'

export interface IStore {
  productReducer: IProductState
}

export const defaultRootState: IStore = {
  productReducer: defaultProductState
}
