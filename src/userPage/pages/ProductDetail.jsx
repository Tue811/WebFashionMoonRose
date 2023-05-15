import React from 'react';
import { ProductDetailComponent, ProductInfo,Color, Size, Price, ValueSize } from '../styles/productDetailStyle';
import { Col, Row,Input } from 'antd';
import Btn from '../components/Btn';
import { ListProducts } from '../styles/homepageStyle';
import CartProduct from '../components/CartProduct';

const ProductDetail = () => {
    return (
        <div>
            <ProductDetailComponent>
                <Row>
                    <Col span={12} style={{textAlign:"center"}}>
                        <img src='https://i.pinimg.com/564x/a5/f3/fc/a5f3fcbf2273210401e8789fe8f5d119.jpg'/>
                    </Col>
                    <Col span={12}>
                        <ProductInfo>
                        <h4>
                            Blazer
                        </h4>
                        <p>
                        Xuất xứ từ Úc và được nhà thiết kế nổi tiếng tỉ mỉ làm thủ công 160 giờ để ra được sản phẩm 
                        . Đặc biệt chất vải bền vừng và thân thiện với môi trường
                        </p>
                        <Color>
                        <b>Màu sắc : </b><br/>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        </Color>
                        <Size>
                            <b>Chọn kích cỡ : </b> <br/>
                            <ValueSize value="XS" disabled />
                            <ValueSize value="S" disabled />
                            <ValueSize value="M" disabled />
                            <ValueSize value="L" disabled />
                            <ValueSize value="XL" disabled />
                        </Size>
                        <Price>
                            <b>Giá</b>
                            <p>289,000 VNĐ</p>
                        </Price>
                        <Btn text='Add To Cart'></Btn>
                        </ProductInfo>
                    </Col>
                </Row>
            </ProductDetailComponent>
            <ListProducts>
                <h3 style={{textAlign:"center", fontSize:42}}>Dành cho bạn</h3>
                <Row>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                    <Col span={8}>
                    <CartProduct/>
                    </Col>
                </Row>
            </ListProducts>
        </div>
    );
};

export default ProductDetail;