import React, { Component } from 'react'
import Product from '../../components/ProductItem/Product'
import ProductList from '../../components/Products/ProductList'
import {connect} from 'react-redux'
import axios from 'axios'
import callAPI from '../../utils/apiCaller'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/index'

class ProductListPage extends Component {

     componentDidMount(){
          this.props.fetchProducts();
     }

     render() {
          let {products} = this.props
          return (
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to='/products/add' type="button" className="btn btn-primary">
                         Thêm sản phẩm
                    </Link>
                    <ProductList>
                         {this.showProducts(products)}
                    </ProductList>
               </div>
          )
     }
     deleteItem = (id) =>{
          this.props.deleteItem(id)
     }
     showProducts = (products)  =>{
          let result = null;
          if(products.length > 0){
               result = products.map((product,index) =>{
                    return (
                         <Product
                              key={index}
                              product={product}
                              index={index}
                              onDelete = {this.deleteItem}
                         ></Product>
                    )
               })
          }
          return result
     }
}

const mapStateToProps = (state) =>{
     return {
          products:state.products
     }
}

const mapDispatchToProps = (dispatch, props) =>{
     return {
          fetchProducts : () =>{
               dispatch(actions.actFetchProductsCallAPI())
          },
          deleteItem : (id)=>{
               dispatch(actions.actDeleteProductCallAPI(id))
          },
          
     }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductListPage)
