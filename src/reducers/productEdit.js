import * as Types from '../constants/ActionTypes'
import callAPI from '../utils/apiCaller'



let initialState = [];
// let findIndex = (id, arr) =>{
//      let result = -1;
//      arr.forEach((arrValue,index)=>{
//          if(arrValue.id === id){
//              result = index;
//          }
//      })
//      return result
//  }
const productEdit = (state = initialState, action) =>{
     switch (action.type) {
          case Types.FETCH_EDIT_PRODUCT:{
               return action.product
          }
          default:
               return state
     }
}
export default productEdit