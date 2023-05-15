import React from 'react';
import { Routes , Route} from 'react-router-dom';
import HeaderAdmin from './adminPage/HeaderAdmin';
import { Row } from 'antd';
import Sidebar from './adminPage/Sidebar';
import ListProductPage from './adminPage/adminpage/ProductPage/ListProductPage';
import Addproduct from './adminPage/adminpage/ProductPage/Addproduct';
import BanHang from './adminPage/adminpage/BanHang/BanHang';
import Listnhanvien from './adminPage/adminpage/NhanvienPage/Listnhanvien';
import Addnhanvien from './adminPage/adminpage/NhanvienPage/Addnhanvien';
import HomePageAdmin from './adminPage/adminpage/Homepage/Homepage';
import Chart from './adminPage/adminpage/ThuNhapPage/Chart';
import BlogPage from './adminPage/adminpage/BlogPage/Blogpage';
import AddBlog from './adminPage/adminpage/BlogPage/Addblog';
import Editproduct from './adminPage/adminpage/ProductPage/Editproduct';
import Editnhanvien from './adminPage/adminpage/NhanvienPage/Editnhanvien';
import EditBlog from './adminPage/adminpage/BlogPage/Editblog';

const admin = () => {
    return (
        <div>
            <HeaderAdmin/>
             
      
      <Row>
      <Sidebar/>
      <Routes>
      <Route path='/products' element={<ListProductPage></ListProductPage>}/>
        <Route path='/banhang' element={<BanHang></BanHang>}/>
        <Route path='/products' element={<ListProductPage></ListProductPage>}/>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}/>
        <Route path='/editproduct' element={<Editproduct></Editproduct>}/>
        <Route path='/nhanvien' element={<Listnhanvien></Listnhanvien>}/>
        <Route path='/addnhanvien' element={<Addnhanvien></Addnhanvien>}/>
        <Route path='/editnhanvien' element={<Editnhanvien></Editnhanvien>}/>
        <Route path='/' element={<HomePageAdmin></HomePageAdmin>}/>
        <Route path='/chart' element={<Chart></Chart>}/>
        <Route path='/blog' element={<BlogPage></BlogPage>}/>
        <Route path='/addblog' element={<AddBlog></AddBlog>}/>
        <Route path='/editblog' element={<EditBlog></EditBlog>}/>
        </Routes>
        </Row>
      
      
    
        </div>
    );
};

export default admin;