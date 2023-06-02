import React, {useState,useEffect} from 'react';
import { ProductDetailComponent, ProductInfo,Color, Size, Price, ValueSize } from '../styles/productDetailStyle';
import { Col, Row,Input } from 'antd';
import Btn from '../components/Btn';
import { ListProducts } from '../styles/homepageStyle';
import CartProduct from '../components/CardProduct';
import { listProducts, listCategories, addCart } from "../services/productAction";
import UserContext from '../context/UserContext'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [products, setProducts]=useState([]);
    const [categories, setCategories] = useState([]);
    const { id } = useParams();

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