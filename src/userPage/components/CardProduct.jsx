import React from "react";
import { Button, Card, Rate, Typography } from "antd";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import {PlusOutlined, HeartOutlined} from '@ant-design/icons';
import { useDispatch } from "react-redux";
const { Meta } = Card;
const CartProduct = ({src,name,price,addToCart, addToFavourite}) => {

  return (
    <div>
      <Card
        hoverable
        style={{
        //   width: 240,
        margin:"20px",  
        }}

        
      >

       <Link to="/product-detail">
            <img
            alt="Ảnh sản phẩm"
            src={src}
            style={{height:300,
            width:"100%"
            }}
          />
           </Link>

        
        <Typography style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            fontSize: 16
        }}>
         <b>{name}</b>
         <Rate disabled defaultValue={2.5} style={{
             margin:0,
             fontSize: 16
            //  color: "#DABAAD"
             }} />
        </Typography>
        <Typography
        style={{
            display: "flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"20px 0"
        }}
        >
            <b style={{
                fontWeight:900,
                fontSize: "18px"
            }}>{price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</b>
            <Button
            style={{backgroundColor:"#DABAAD", color:"white"}}
            onClick={addToCart}
            >
                <PlusOutlined />
            </Button>
            <Button
            style={{backgroundColor:"#DABAAD", color:"white"}}
            onClick={addToFavourite}
            >
                <HeartOutlined /> 
            </Button>
        </Typography>
      </Card>
    </div>
  );
};

export default CartProduct;
