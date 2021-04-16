import { combineReducers } from "redux";
import products from './products'
import productEdit from './productEdit'

const myReducers = combineReducers({
     products,
     productEdit
})

export default myReducers;