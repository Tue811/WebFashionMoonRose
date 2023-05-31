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
                </Col>
            </Row>
           
        </div>
    );
};

export default Products;