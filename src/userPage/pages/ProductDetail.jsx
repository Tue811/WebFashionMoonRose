import React, {useState,useEffect} from 'react';
import { ProductDetailComponent, ProductInfo,Color, Size, Price, ValueSize } from '../styles/productDetailStyle';
import { Col, Row,Input } from 'antd';
import Btn from '../components/Btn';
import { ListProducts } from '../styles/homepageStyle';
import CartProduct from '../components/CardProduct';
import { listProducts, listCategories, addCart } from "../services/productAction";
import UserContext from '../context/UserContext'
import { useParams } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import db from '../../db';
import { useNavigate } from 'react-router-dom';


const ProductDetail = () => {
    
  const {state,dispatch} = React.useContext(UserContext);
    const [products, setProducts]=useState([]);
    const [categories, setCategories] = useState([]);
    const [name,setName]=useState("");
    const [img, setImg]=useState("")
    const [price, setPrice]=useState("");
    const [des, setDes]=useState("")
    const { id } = useParams();
    // const history = useHistory();
    const navigate = useNavigate();
    console.log(id)
    console.log(products)
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

      useEffect(()=>{
        products.map((e)=>{
            if(e.id==id){
                setName(e.name);
                setDes(e.introduce);
                setImg(e.thumbnail);
                setPrice(e.finalprice)
            }
          })
      } )
      const addToCart = (id) => {
        // const cart=props.cart;
        //  cart.push(e)
        //  console.log(props)
        //  props.add_cart(cart)
        // dispatch({type: ADDCART, payload: cart})
        console.log(id);
        let check = false;
        state.cart.map((e) => {
          if (e.id == id) {
            e.qty = e.qty + 1;
            check = true;
          }
          return e;
        });
        if (check == false) {
            products.map((e)=>{
                if(e.id==id){
                    e.qty = 1;
                    state.cart.push(e);
                }
              })
        //   product.qty = 1;
        //   state.cart.push(product);
        }
        dispatch({ type: "update_cart", payload: state.cart });
        setTimeout(() => {
          dispatch({ type: "hide_loading" });
        }, 1000);
    
        localStorage.setItem("state", JSON.stringify(state));
      };

      const onPayment =()=>{
        addToCart();
        navigate( "/payment" )
      }


    return (
        <div>
            <ProductDetailComponent>
                <Row>
                    <Col span={12} style={{textAlign:"center"}}>
                        <img src={img}/>
                    </Col>
                    <Col span={12}>
                        <ProductInfo>
                        <h4>
                            {name}
                        </h4>
                        <p>
                       {des}
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
                            <p>{price.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}</p>
                        </Price>
                        <Btn text='Thêm vào giỏ hàng' onClick={addToCart(id)}></Btn>
                        <Btn text='Mua ngay' onClick={onPayment()} ></Btn>
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
                   product={e}
                //   name={e.name}
                //   price={e.finalprice}
                //   src={e.thumbnail}
                //   addToCart={()=>addToCart(e,k)}
                //   addToFavourite={()=>addToFavourite(e,k)}
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