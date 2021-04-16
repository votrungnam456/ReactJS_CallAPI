import * as Types from '../constants/ActionTypes'
import callAPI from '../utils/apiCaller'


//FETCH DATA
export const actFetchProducts = (products) =>{
     return ({
          type:Types.FETCH_PRODUCTS,
          products
     })
}
export const actFetchProductsCallAPI = () =>{
     return (dispatch)=>{
          return callAPI('products','GET',null).then(res=>{
               dispatch(actFetchProducts(res.data))
          })
     }
}

//DELETE DATA
export const actDeleteProduct = (id) =>{
     return ({
          type:Types.DELETE_PRODUCT,
          id
     })
}
export const actDeleteProductCallAPI = (id) =>{
     return (dispatch)=>{
          return callAPI(`/products/${id}`,'DELETE', null).then(res => {
               dispatch(actDeleteProduct(id))
          })
     }
}

//ADD DATA
export const actAddProduct = (product) =>{
     return ({
          type:Types.ADD_PRODUCT,
          product
     })
}
export const actAddProductCallAPI = (product) =>{
     return (dispatch)=>{
          return callAPI(`/products`,'POST', product).then(res => {
               dispatch(actAddProduct(product))
          })
     }
}

//FETCH 1 DATA
export const actFetchEditProduct = (product) =>{
     return ({
          type:Types.FETCH_EDIT_PRODUCT,
          product
     })
}
export const actFetchEditProductCallAPI = (id) =>{
     return (dispatch)=>{
          return callAPI(`products/${id}`,'GET',null).then(res=>{
               dispatch(actFetchEditProduct(res.data))
          })
     }
}

//UPDATE DATA
export const actEditProduct = (product) =>{
     return ({
          type:Types.UPDATE_PRODUCT,
          product
     })
}
export const actEditProductCallAPI = (product) =>{
     return (dispatch)=>{
          return callAPI(`products/${product.id}`,'PUT',product).then(res=>{
               dispatch(actEditProduct(res.data))
          })
     }
}