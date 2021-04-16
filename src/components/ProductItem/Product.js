import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
     render() {
          let {product, index} = this.props
          let statusName = Boolean(product.status) ? 'Còn hàng' : 'Hết hàng'
          let statusClass = Boolean(product.status) ? 'warning' : 'default'
          return (
               <tr>
                    <td>{index+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                         <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                         <Link 
                              to={`/products/${product.id}/edit`}
                              type="button" 
                              className="btn btn-success">Sửa</Link>
                         <button type="button" 
                              onClick={()=> this.onDelete(product.id)}
                              className="btn btn-warning">Xóa</button>
                    </td>
               </tr>
          )
     }
     onDelete = (id) =>{
          if(window.confirm('bạn có muốn xóa hay không ???')){
               console.log(id)
               this.props.onDelete(id)
          }
     }
}
