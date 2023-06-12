import React from "react";
import { Button, Card, Rate, Typography } from "antd";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import {PlusOutlined, HeartOutlined} from '@ant-design/icons';
import UserContext from '../context/UserContext'
import { UPDATECART } from "../contants/productsContants";
const { Meta } = Card;
const CartProduct = ({product}) => {
  const {state,dispatch} = React.useContext(UserContext);
  // const addToCart=(product, index)=>{
  //  // const cart=props.cart; 
  //  //  cart.push(e)
  //  //  console.log(props)
  //  //  props.add_cart(cart)
  //  // dispatch({type: ADDCART, payload: cart})
  //  let check = false;

  //        state.cart.map((e, index)=>{
  //            if(e.index == index){
  //                e.qty = e.qty+1;
  //                check =  true;    
  //            }
  //            return e;
  //        })
  //        if(check== false){
  //            product.qty = 1;
  //            state.cart.push(product);
  //        }
  //        dispatch({type:"ADDCART",payload:state.cart});
         
  //        localStorage.setItem("state",JSON.stringify(state)); 
  // }
  const addToCart = (product) => {
    // const cart=props.cart;
    //  cart.push(e)
    //  console.log(props)
    //  props.add_cart(cart)
    // dispatch({type: ADDCART, payload: cart})
    // console.log(product);
    let check = false;
    state.cart.map((e) => {
      if (e.id == product.id) {
        e.qty = e.qty + 1;
        check = true;
      }
      return e;
    });
    if (check == false) {
      product.qty = 1;
      state.cart.push(product);
    }
    dispatch({ type: UPDATECART, payload: state.cart });
    setTimeout(() => {
      dispatch({ type: "hide_loading" });
    }, 1000);

    localStorage.setItem("state", JSON.stringify(state));
  };
 
  const addToFavourite=(product, k)=>{

   let check = false;
         state?.favourite?.map((e, index)=>{
           console.log(e)
             if(index == k){
                 e.qty = e.qty+1;
                 check =  true;    
             }
             return e;
         })
         if(check== false){
             product.qty = 1;
             state.favourite?.push(product);
         }
         dispatch({type:"ADDFAVOURITE",payload:state.favourite});
         
         localStorage.setItem("state",JSON.stringify(state)); 
  }

  return (
    <div>
      <Card
        hoverable
        style={{
        //   width: 240,
        margin:"20px",
        height: 500  
        }}

        
      >

       <Link to={"/product-detail/"+product.id}>
            <img
            alt="Ảnh sản phẩm"
            src={product.thumbnail}
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
         <b>{product.name}</b>
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
            }}>{product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</b>
            <Button
            style={{backgroundColor:"#DABAAD", color:"white"}}
            onClick={()=>addToCart(product)}
            >
                <PlusOutlined
                style={{padding: 0,
                margin: 0
                }}
                />
            </Button>
            <Button
            style={{backgroundColor:"#DABAAD", color:"white"}}
            onClick={()=>addToFavourite(product)}
            >
                <HeartOutlined /> 
            </Button>
        </Typography>
      </Card>
    </div>
  );
};

export default CartProduct;
