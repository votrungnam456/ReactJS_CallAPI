import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

const menus = [
     {
          name:'Trang chủ',
          to:'/',
          exact : true
     },
     {
          name:'Quản lý sản phẩm',
          to:'/products',
          exact : true
     }
]

const CustomMenu = ({label, to, exact}) => {
     return (
          <Route
               path={to}
               exact={exact}
               children={({match})=>{
                    let active = match ? 'active' : ''
                    return (
                         <li className={`nav-item ${active}`}>
                              <Link to={to} className='nav-link'>
                                   {label}
                              </Link>
                         </li>
                    )
               }}
          />
     )
}

export default class Menu extends Component {
     render() {
          return (
               <nav className="navbar navbar-expand navbar-default bg-light">
                    <ul className="nav navbar-nav">
                         {this.showMenus(menus)}
                    </ul>
               </nav>
          )
     }
     showMenus = (menus) =>{
          let result = null;
          
          if(menus.length > 0){
               result = menus.map((menu,index)=>{
                    return(
                         <CustomMenu key={index} label={menu.name} to={menu.to} exact = {menu.exact}></CustomMenu>
                    )
               })
          }
          return result
     }
}
