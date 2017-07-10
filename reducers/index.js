import { combineReducers } from 'redux'
import brands from './brands'
import patterns from './patterns'
import sections from './sections'

// This is where we will import all of our reducers and then combine them
// so we can create a store from them in the index
export default combineReducers({
  brands,
  patterns,
  sections
})
