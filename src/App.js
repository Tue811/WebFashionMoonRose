import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import React, { useEffect, useReducer, useState } from "react";
// import Login fro
import { Routes, Route } from "react-router-dom";
// import Register from './pages/Register';
import HomePage from "./userPage/pages/HomePage";
import Products from "./userPage/pages/Products";
import ProductDetail from "./userPage/pages/ProductDetail";
import Header from "./userPage/components/Header";
import Footer from "./userPage/components/Footer";
import AboutUs from "./userPage/pages/AboutUs";
import PersonalInfo from "./userPage/components/PersonalInfo";
import ChangePass from "./userPage/components/ChangePass";
import Account from "./userPage/pages/Account";
import Blog from "../src/userPage/components/Blog";
import BlogDetail from "./userPage/components/BlogDetail";
import Contact from "./userPage/pages/Contact";
import Login from "./userPage/pages/Login";
import Cart from "./userPage/components/Cart";
import UserProvider from './userPage/context/UserContext'
import store from "./userPage/context/store";
import reducer from './userPage/context/productReducer'

function App() {
  const localState = localStorage.getItem("state")
  ?JSON.parse(localStorage.getItem("state"))
  :store;
const [state,dispatch] = useReducer(reducer,localState);
  return (
    <UserProvider value={{state,dispatch}}>
      <Header />
      <Routes>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        {/* <Route path='/register' element={<Register/>}></Route> */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product-detail" element={<ProductDetail />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
      </UserProvider>
  );
}

export default App;
