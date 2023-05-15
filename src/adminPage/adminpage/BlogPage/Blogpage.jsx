import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
export default class BlogPage extends React.Component{
    render(){
        return(
            
       <div className="col-10 content">
                                <div className="row mt-3 mb-3 header_content">
                <div className="col-4"> </div>
                <div className="col-4 click_content"> <NavLink to="/addblog">Thêm Blog</NavLink></div> 
                <div className="col-4"></div>
            </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body row">
                        <div className="col-10">
                        <h5 className="card-title">Tên Blog</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
                        </div>
                    </div>
                    
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body row">
                        <div className="col-10">
                        <h5 className="card-title">Tên Blog</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
                        </div>
                    </div>
                    
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body row">
                        <div className="col-10">
                        <h5 className="card-title">Tên Blog</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
                        </div>
                    </div>
                    
                    </div>
                    <div className="card mb-3">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body row">
                        <div className="col-10">
                        <h5 className="card-title">Tên Blog</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-muted"><i className="bi bi-x"></i></a>
                        </div>
                    </div>
                    
                    </div>
        </div>
            
        );
    }
}