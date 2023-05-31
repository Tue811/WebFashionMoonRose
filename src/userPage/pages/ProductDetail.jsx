import React, {useState,useEffect} from 'react';
import { ProductDetailComponent, ProductInfo,Color, Size, Price, ValueSize } from '../styles/productDetailStyle';
import { Col, Row,Input } from 'antd';
import Btn from '../components/Btn';
import { ListProducts } from '../styles/homepageStyle';
import CartProduct from '../components/CardProduct';
import { listProducts, listCategories, addCart } from "../services/productAction";
import UserContext from '../context/UserContext'

const ProductDetail = () => {
    const [products, setProducts]=useState([]);
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        refresh();
        getListCategories()
      },[])
      
      const refresh=async()=>{
        const t=await listProducts(8);
      
        setProducts(t)
      
      
      }
      
      const getListCategories =async()=>{
        const c = await listCategories();
        setCategories(c)
      }
      const {state,dispatch} = React.useContext(UserContext);
       const addToCart=(product, index)=>{
        // const cart=props.cart; 
        //  cart.push(e)
        //  console.log(props)
        //  props.add_cart(cart)
        // dispatch({type: ADDCART, payload: cart})
        let check = false;
              state.cart.map((e, index)=>{
                  if(e.index == index){
                      e.qty = e.qty+1;
                      check =  true;    
                  }
                  return e;
              })
              if(check== false){
                  product.qty = 1;
                  state.cart.push(product);
              }
              dispatch({type:"ADDCART",payload:state.cart});
              
              localStorage.setItem("state",JSON.stringify(state)); 
       }
      
       const addToFavourite=(product, k)=>{
        console.log(product);
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
                        <Btn text='Thêm vào giỏ hàng'></Btn>
                        <Btn text='Mua ngay'></Btn>
                        </ProductInfo>
                    </Col>
                </Row>
            </ProductDetailComponent>
            <ListProducts>
                <h3 style={{textAlign:"center", fontSize:42}}>Dành cho bạn</h3>
                <Row>
                {
               products.map((e,k) => {
                return(
                  <Col key={k} span={6}>
            
                  <CartProduct 
                  name={e.name}
                  price={e.finalprice}
                  src={e.thumbnail}
                  addToCart={()=>addToCart(e,k)}
                  addToFavourite={()=>addToFavourite(e,k)}
                  />
                
                </Col>
                )
              })
             }
                </Row>
            </ListProducts>
        </div>
    );
};

export default ProductDetail;