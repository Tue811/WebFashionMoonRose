import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "antd";
import DeleteOutlined from '@ant-design/icons';
import { RightStyle, LeftStyle, ContentStyle, SelectStyle } from "../style/cartStyle";


export default class Cart extends React.Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div class="h-100 h-custom">
                            <div class="container py-5 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-12">
                                        <ContentStyle class="card card-registration card-registration-2 content">
                                            <div class="card-body p-0 ">
                                                <div class="row g-0 ">
                                                    <div class="col-lg-8 left">
                                                        <LeftStyle>
                                                            <div class="p-5">
                                                                <div class="d-flex justify-content-between align-items-center mb-5">
                                                                    <h1 class="fw-bold mb-0 text-black">
                                                                        Giỏ hàng
                                                                    </h1>
                                                                    <h6 class="mb-0 text-muted">3 sản phẩm</h6>
                                                                </div>
                                                                <hr class="my-4" />

                                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                                        <img
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                                            class="img-fluid rounded-3"
                                                                            alt="Cotton T-shirt"
                                                                        />
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 class="text-muted">Shirt</h6>
                                                                        <h6 class="text-black mb-0">
                                                                            Cotton T-shirt
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-4 col-lg-4 col-xl-2 d-flex">
                                                                        {/* <button class="btn btn-link px-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i class="fas fa-minus"></i>
                                                                </button> */}
                                                                        <Button shape="circle">-</Button>
                                                                        <span> 10 </span>
                                                                        <Button shape="circle">+</Button>
                                                                    </div>
                                                                    <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 class="mb-0">€ 44.00</h6>
                                                                    </div>
                                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        {/* <button type="button" class="btn btn-danger">X</button> */}
                                                                        <a href="#!" class="text-danger">
                                                                            <DeleteOutlined />
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <hr class="my-4" />

                                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                                        <img
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                                                            class="img-fluid rounded-3"
                                                                            alt="Cotton T-shirt"
                                                                        />
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 class="text-muted">Shirt</h6>
                                                                        <h6 class="text-black mb-0">
                                                                            Cotton T-shirt
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-4 col-lg-4 col-xl-2 d-flex">
                                                                        {/* <button class="btn btn-link px-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i class="fas fa-minus"></i>
                                                                </button> */}
                                                                        <Button shape="circle">-</Button>
                                                                        <span> 10 </span>
                                                                        <Button shape="circle">+</Button>
                                                                    </div>
                                                                    <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 class="mb-0">€ 44.00</h6>
                                                                    </div>
                                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        {/* <button type="button" class="btn btn-danger">X</button> */}
                                                                        <a href="#!" class="text-danger">
                                                                            <DeleteOutlined />
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <hr class="my-4" />

                                                                <div class="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                                        <img
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                                                                            class="img-fluid rounded-3"
                                                                            alt="Cotton T-shirt"
                                                                        />
                                                                    </div>
                                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 class="text-muted">Shirt</h6>
                                                                        <h6 class="text-black mb-0">
                                                                            Cotton T-shirt
                                                                        </h6>
                                                                    </div>
                                                                    <div class="col-md-4 col-lg-4 col-xl-2 d-flex">
                                                                        {/* <button class="btn btn-link px-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i class="fas fa-minus"></i>
                                                                </button> */}
                                                                        <Button shape="circle">-</Button>
                                                                        <span> 10 </span>
                                                                        <Button shape="circle">+</Button>
                                                                    </div>
                                                                    <div class="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 class="mb-0">€ 44.00</h6>
                                                                    </div>
                                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        {/* <button type="button" class="btn btn-danger">X</button> */}
                                                                        <a href="#!" class="text-danger">
                                                                            <DeleteOutlined />
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <hr class="my-4" />

                                                                <div class="pt-5">
                                                                    <h6 class="mb-0">
                                                                        <a href="#!" class="text-body">
                                                                            <i class="fas fa-long-arrow-alt-left me-2"></i>
                                                                            Trở về trang chủ
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </LeftStyle>
                                                    </div>

                                                    <div class="col-lg-4 right">
                                                        <RightStyle>
                                                            <div class="p-5">
                                                                <h3 class="fw-bold mb-5 mt-2 pt-1">Đặt hàng</h3>
                                                                <hr class="my-4" />

                                                                <div class="d-flex justify-content-between mb-4">
                                                                    <h5 class="">Tổng tiền sản phẩm</h5>
                                                                    <h5>€ 132.00</h5>
                                                                </div>
                                                                <hr class="my-4" />

                                                                <h5 class=" mb-3">Mã giảm giá vận chuyển</h5>

                                                                <div class="mb-4 pb-2">
                                                                    <select class="form-select form-select-lg mb-3" >
                                                                        <option selected>Mã freeship 15k</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>

                                                                </div>

                                                                <h5 class=" mb-3">Mã giảm giá sản phẩm</h5>

                                                                <div class="mb-5">
                                                                    <div class="form-outline">
                                                                    <select class="form-select form-select-lg mb-3" >
                                                                        <option selected>Mã giảm giá 20k</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                        {/* <input type="text" id="form3Examplea2" class="form-control form-control-lg" /> */}
                                                                        {/* <label class="form-label" for="form3Examplea2">Enter your code</label> */}
                                                                    </div>
                                                                </div>

                                                                <hr class="my-4" />

                                                                <div class="d-flex justify-content-between mb-5">
                                                                    <h5 class="text-uppercase">
                                                                        Tổng thanh toán
                                                                    </h5>
                                                                    <h5>€ 137.00</h5>
                                                                </div>

                                                                <button
                                                                    type="button"
                                                                    class="btn btn-dark btn-block btn-lg"
                                                                    data-mdb-ripple-color="dark"
                                                                >
                                                                    Đặt hàng
                                                                </button>
                                                            </div>
                                                        </RightStyle>
                                                    </div>
                                                </div>
                                            </div>
                                        </ContentStyle>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}