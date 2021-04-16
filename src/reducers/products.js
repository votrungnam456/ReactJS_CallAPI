import * as Types from '../constants/ActionTypes'
import callAPI from '../utils/apiCaller'



let initialState = [];
let findIndex = (id, arr) =>{
     let result = -1;
     arr.forEach((arrValue,index)=>{
         if(arrValue.id === id){
             result = index;
         }
     })
     return result
 }
const products = (state = initialState, action) =>{
     switch (action.type) {
          case Types.FETCH_PRODUCTS:{
               state=action.products

               return [...state]
          }
          case Types.DELETE_PRODUCT:{
               return state.filter(product => product.id !== action.id)
               // let index = this.findIndex(id,this.state.products);
               // if(index !== -1){
               //      products.splice(index,1);
               //      this.setState({
               //           products:products
               //      })
               // } 
          }
          case Types.ADD_PRODUCT:{
               // state.push(action.product)
               // console.log(state)
               callAPI(`products`,'GET',null).then(res=>{
                    state = res.data;
               })
               return [...state]
          }
          case Types.UPDATE_PRODUCT:{
               let index = findIndex(action.product.id,state)
               state.forEach((value, index) => {
                    if (value.id === action.product.id) {
                      state[index] = action.product;
                    }
                  });
               return [...state]
          }
          default:
               return state
     }
}
export default products