import React from "react";
import { Button, Card, Rate, Typography } from "antd";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import {PlusOutlined} from '@ant-design/icons';
const { Meta } = Card;
const CartProduct = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
        //   width: 240,
        margin:"20px"
        }}
        cover={
            <img
            alt="Ảnh sản phẩm"
            src="https://i.pinimg.com/564x/c2/a3/f6/c2a3f6b9fe3f2a8f84b017e74645ce80.jpg"
            style={{height:280}}
          />
        }
        
      >
        
        <Typography style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            fontSize: 16
        }}>
         <b>Slip Dress</b>
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
            }}>$50</b>
            <Button
            style={{backgroundColor:"#DABAAD", color:"white"}}
            >
                <PlusOutlined />
            </Button>
        </Typography>
      </Card>
    </div>
  );
};

export default CartProduct;
