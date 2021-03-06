import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const store = {
  makeStore: (initialState = {}) => {
    return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
  }
}

export default store
