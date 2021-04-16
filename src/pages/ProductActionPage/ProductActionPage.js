import React, { Component } from 'react'
import callAPI from '../../utils/apiCaller'
import * as actions from '../../actions/index'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductActionPage extends Component {
     constructor(props){
          super(props)
          this.state = {
               id:'',
               txtName:'',
               txtPrice: '',
               txtStatus: true
          }
     }

     componentDidMount(){
          let {match} = this.props
          if(match){
               let id = match.params.id
               this.props.fetchEditProduct(id)
               // callAPI(`products/${id}`,'GET',null).then(res=>{
               //      console.log(res)
               //      this.setState({
               //           id: res.data.id,
               //           txtName:res.data.name,
               //           txtPrice:res.data.price,
               //           txtStatus:res.data.status
               //      })
               // })
          }
     }

     static getDerivedStateFromProps(nextProps,prevState){
          console.log(nextProps , prevState)
          if(nextProps.match){
               if(nextProps.editProduct){
                    if(nextProps.editProduct.id !== prevState.id){
                         return {
                              id:nextProps.editProduct.id,
                              txtName:nextProps.editProduct.name,
                              txtPrice:nextProps.editProduct.price,
                              txtStatus:nextProps.editProduct.status
                         }
                    }
               }
               else{
                    if(prevState.id){
                         return {
                              txtName:"",
                              txtPrice:"",
                              txtStatus:true
                         }
                    }
               }
          }
          else{
          }
          return null;
      }



     onChange = (ev) =>{
          let name = ev.target.name;
          let value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value

          this.setState({
               [name]:value
          })
     }


     onSubmit = (ev) =>{
          ev.preventDefault();
          let {id,txtName,txtPrice,txtStatus} = this.state;
          let {history} = this.props
          let Data = {
               id:id,
               name:txtName,
               price:txtPrice,
               status:txtStatus
          }
          if(Data.id){
               this.props.updateProuduct(Data)
               history.goBack();
          }
          else{

               this.props.addProduct(Data)
               history.goBack();
          }

     }

     render() {
          // console.log(this.state)
          
          return (
               <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                         <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                   <label>Tên sản phẩm: </label>
                                   <input 
                                        onChange={this.onChange} 
                                        value={this.state.txtName||""}
                                        type="text" className="form-control" name="txtName"
                                   />
                              </div>
                              <div className="form-group">
                                   <label>Giá: </label>
                                   <input 
                                        onChange={this.onChange} 
                                        value={this.state.txtPrice||""} 
                                        type="number" className="form-control" name="txtPrice"  
                                   />
                              </div>
                              <div className="form-group">
                                   <label>Trạng thái: </label>
                              </div>
                              <div className="checkbox">
                                   <label>
                                        <input 
                                             onChange={this.onChange} 
                                             type="checkbox" checked={!!this.state.txtStatus} name="txtStatus" 
                                        /> Còn hàng
                                   </label>
                              </div>

                              <button type="submit" className="btn btn-primary">Lưu lại</button>
                              <Link to='/products' type="button" className="btn btn-danger">Quay lại</Link>
                         </form>
                    </div>
               </div>


          )
     }
}

const mapStateToProps = (state) =>{
     return {
          editProduct: state.productEdit
     }
}

const mapDispatchToProps = (dispatch, props) =>{
     return {
          addProduct: (product) => {
               dispatch(actions.actAddProductCallAPI(product))
          },
          fetchEditProduct : (id)=>{
               dispatch(actions.actFetchEditProductCallAPI(id))
          },
          updateProuduct : (product) =>{
               dispatch(actions.actEditProductCallAPI(product))
          }
     }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage)
