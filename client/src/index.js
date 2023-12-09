import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import CheckOut from './pages/CheckOut';
import HomePage from './pages/HomePage';
import SignIn from './pages/Login/SignIn';
import ProductPage from './pages/ProductPage';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import SignUp from './pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <Fragment>
        <Header>
        </Header>
        <HomePage></HomePage>
      </Fragment>
    </DefaultLayout>,

  }, {
    path: "/categories/:id",
    element: <DefaultLayout>
      <Fragment>
        <Header />
        <Products></Products>
      </Fragment>
    </DefaultLayout>,
  }, {
    path: "/product/:id",
    element: <DefaultLayout>
      <ProductPage />
    </DefaultLayout>,
  },
  {
    path: "/SignIn",
    element:
      <SignIn />

  }, {
    path: "/SignUp",
    element:
      <SignUp />

  },
  {
    path: '/Drawer',
    element:
      <Drawer />
  }, {
    path: '/ShoppingCart',
    element:
      <ShoppingCart />
  },
  {
    path: '/CheckOut',
    element:
      <CheckOut />
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


