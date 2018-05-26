import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { defaultRootState } from './root'

import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './root.reducer'

// configure redux
export const store = createStore(
  rootReducer,
  defaultRootState,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware
  ))
)
