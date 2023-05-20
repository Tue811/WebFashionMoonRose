import "./App.css";
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
import Contact from "./userPage/pages/Contact";

function App() {
  return (
    <>
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
