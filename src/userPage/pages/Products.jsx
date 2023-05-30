import React ,{useState,useEffect}from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row } from 'antd';
import CartProduct from '../components/CardProduct';
import { listProducts, listCategories, addCart } from "../services/productAction";
import UserContext from '../context/UserContext'

const Products = () => {
    const [products, setProducts]=useState([]);
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        refresh();
        getListCategories()
      },[])
      
      const refresh=async()=>{
        const t=await listProducts();
      
        setProducts(t)
      
      
      }
      
      const getListCategories =async()=>{
        const c = await listCategories();
        setCategories(c)
      }
      const {state,dispatch} = React.useContext(UserContext);
      console.log(state)
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
          
            <Row>
                <Col span={6}>
                 

                </Col>
                <Col span={18}>
                    <Row>
                    {
               products.map((e,k) => {
                return(
                  <Col key={k} span={8}>
            
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
                </Col>
            </Row>
           
        </div>
    );
};

export default Products;