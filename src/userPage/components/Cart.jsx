import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Space } from "antd";
import DeleteOutlined from "@ant-design/icons";
import {
  RightStyle,
  LeftStyle,
  ContentStyle,
  SelectStyle,
} from "../styles/cartStyle";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { UPDATECART } from "../contants/productsContants";

const Cart = (props) => {
  const { state, dispatch } = React.useContext(UserContext);
  const [cart, setCart] = useState([]);

  var priceTransport = 20000;
  var totals = 0;
 
  const removeCart = (product) => {
    const new_cart = [];
    state.cart.map((e) => {
      if (e.id != product.id) {
        new_cart.push(e);
      }
    });
    state.cart = new_cart;
    // setState(state);
    dispatch({ type: UPDATECART, payload: new_cart });
    localStorage.setItem("state", JSON.stringify(state));
    // updateCart();
  };
  const handleDecrement = (product) => {
    console.log("test")
    const new_cart = state.cart.map((e) => {
      if (e.id === product.id) {
        e.qty = e.qty - 1;
      }
      return e;
    });
    dispatch({ type: UPDATECART, payload: new_cart });
    localStorage.setItem("state", JSON.stringify(state));
  };

  const handleIncrement = (product) => {
    const new_cart = state.cart.map((e) => {
      if (e.id === product.id) {
        e.qty = e.qty + 1;
      }
      return e;
    });
    dispatch({ type: UPDATECART, payload: new_cart });
    localStorage.setItem("state", JSON.stringify(state));
  };

  useEffect(() => {
    setCart(state.cart);
  }, [state.cart]);

  return (
    <section>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="h-100 h-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12">
                  <ContentStyle className="card card-registration card-registration-2 content">
                    <div className="card-body p-0 ">
                      <div className="row g-0 ">
                        <div className="col-lg-8 left">
                          <LeftStyle>
                            <div className="p-5">
                              <div className="d-flex justify-content-between align-items-center mb-5">
                                <h1 className="fw-bold mb-0 text-black">
                                  Giỏ hàng
                                </h1>
                                <h6 className="mb-0 text-muted">
                                  {state.cart.length} sản phẩm
                                </h6>
                              </div>
                              <hr className="my-4" />

                              {state.cart.map((v, k) => {
                                console.log(v);
                                return (
                                  <div
                                    key={k}
                                    className="row mb-4 d-flex justify-content-between align-items-center"
                                  >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={v.thumbnail}
                                        className="img-fluid rounded-3"
                                        alt="Cotton T-shirt"
                                      />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">{v.name}</h6>
                                      <h6 className="text-black mb-0">
                                        {v.color}
                                      </h6>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-2 d-flex">
                                      <Button
                                        shape="circle"
                                        onClick={() => handleDecrement(v.id)}
                                      >
                                        -
                                      </Button>
                                      <span className="quanty"> {v.qty} </span>

                                      <Button
                                        shape="circle"
                                        onClick={() => handleIncrement(v.id)}
                                      >
                                        +
                                      </Button>
                                    </div>
                                    <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 className="mb-0">
                                        {(v.finalprice * v.qty).toLocaleString(
                                          "vi",
                                          { style: "currency", currency: "VND" }
                                        )}
                                      </h6>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                      {/* <button type="button" className="btn btn-danger">X</button> */}
                                      <Space>
                                        <Button
                                          type="text"
                                          onClick={() => {
                                            removeCart(v);
                                          }}
                                        >
                                          x
                                        </Button>
                                      </Space>
                                    </div>
                                  </div>
                                );
                              })}

                              <hr className="my-4" />

                              <div className="pt-5">
                                <h6 className="mb-0">
                                  <Link to={"/"} className="text-body">
                                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                                    Trở về trang chủ
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </LeftStyle>
                        </div>

                        <div className="col-lg-4 right">
                          <RightStyle>
                            <div className="p-5">
                              <h3 className="fw-bold mb-5 mt-2 pt-1">
                                Đặt hàng
                              </h3>
                              <hr className="my-4" />

                              <div className="d-flex justify-content-between mb-4">
                                <h5 className="">Tổng tiền</h5>
                                <h5>
                                  {state.cart.map((v, k) => {
                                    totals += v.finalprice * v.qty;
                                    // console.log(totals);
                                  })}
                                  <h5>
                                    {totals.toLocaleString("vi", {
                                      style: "currency",
                                      currency: "VND",
                                    })}
                                  </h5>
                                </h5>
                              </div>
                              <hr className="my-4" />
                              <div className="row">
                                <div className="col-6">
                                  <h5 className=" mb-3">Tiền vận chuyển:</h5>
                                </div>
                                <div className="col-6">
                                  <h5 className=" mb-3 tvc">20.000đ</h5>
                                </div>
                              </div>

                              {/* <div className="mb-4 pb-2">
                                <h5 className=" mb-3">
                                  Áp mã giảm giá vận chuyển
                                </h5>

                                <select className="form-select form-select-lg mb-3">
                                  <option selected>Mã giảm 15k</option>
                                </select>
                              </div> */}

                              <div className="mb-5">
                                <div className="form-outline">
                                  {/* <select className="form-select form-select-lg mb-3">
                                    <option selected>Mã giảm giá 20k</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select> */}
                                  {/* <input type="text" id="form3Examplea2" className="form-control form-control-lg" /> */}
                                  {/* <label className="form-label" for="form3Examplea2">Enter your code</label> */}
                                </div>
                              </div>

                              <hr className="my-4" />

                              <div className="d-flex justify-content-between mb-5">
                                <h5 className="text-uppercase">
                                  Tổng thanh toán
                                </h5>
                                <h5>
                                  {(totals + priceTransport).toLocaleString(
                                    "vi",
                                    { style: "currency", currency: "VND" }
                                  )}
                                </h5>
                              </div>
                              <Link to={"/payment"}>
                                <button
                                  type="button"
                                  className="btn btn-dark btn-block btn-lg"
                                  data-mdb-ripple-color="dark"
                                >
                                  Đặt hàng
                                </button>
                              </Link>
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
};
export default Cart;
