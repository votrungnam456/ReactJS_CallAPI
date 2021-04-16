import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
     {
          path: '/',
          exact: true,
          main : () => <HomePage />
     },
     {
          path: '/products',
          exact: true,
          main : () => <ProductListPage />
     },
     {
          path: '/products/add',
          exact: true,
          main : ({history}) => <ProductActionPage history={history} />
     },
     {
          path: '/products/:id/edit',
          exact: true,
          main : ({match, history}) => <ProductActionPage history={history} match={match}/>
     },
     {
          path: '',
          exact: false,
          main : () => <NotFoundPage />
     }
];

export default routes;