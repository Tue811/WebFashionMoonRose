import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row,Checkbox  } from "antd";
import CartProduct from "../components/CardProduct";
import {
  listProducts,
  listCategories,
  addCart,
} from "../services/productAction";
import UserContext from "../context/UserContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    refresh();
    getListCategories();
  }, []);

  const refresh = async () => {
    const t = await listProducts();

    setProducts(t);
  };

  const getListCategories = async () => {
    const c = await listCategories();
    setCategories(c);
  };

  const nameCategories= categories.map((e)=>{
    return e.name
  })

  console.log(nameCategories);

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div style={{padding:"0 50px 100px 50px"}}>

            {categories.map((v) => {
              return (
                <div key={v.name}>
                  <h4 style={{paddingTop:30,fontWeight:900}}>{v.name}</h4>
                  <Row>
                    {products.map((e, k) => {
                      if (e.type === v.name) {
                        return (
                          <Col key={k} span={6}>
                            <CartProduct product={e} />
                          </Col>
                        );
                      }
                      return null; // Add this line to handle the cases where the product doesn't match the category
                    })}
                  </Row>
                </div>
              );
            })}

    </div>
  );
};

export default Products;
