import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row } from 'antd';
import CartProduct from '../components/CardProduct';

const Products = () => {
    return (
        <div>
          
            <Row>
                <Col span={6}>
                 

                </Col>
                <Col span={18}>
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
                    </Row>
                </Col>
            </Row>
           
        </div>
    );
};

export default Products;