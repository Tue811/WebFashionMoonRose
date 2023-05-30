import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Banner,
  Collection,
  ContentLayout,
  ListProducts,
  Sales,
  SliderTrending,
  Trending,
  ContentSales,
  GeneralComment,
  SlideItem,
} from "../styles/homepageStyle";
import Btn from "../components/Btn";
import { Col, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import EvaluateComponent from "../components/EvaluateComponent";
import banner from "../../assets/img/banner.jpg";
import logo from "../../assets/img/logowebclothing.png";
import SwiperCore, { Virtual, Navigation, Pagination , Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect, useDispatch } from "react-redux";
import { listProducts, listCategories, addCart } from "../services/productAction";
import db from '../../db'
import { ADDCART } from "../contants/productsContants";

// // Import Swiper styles

const HomePage = (props) => {

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [products, setProducts]=useState([]);
  const [categories, setCategories] = useState([])
  // Create array with 500 slides
  // const [slides, setSlides] = useState(
  //   Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  // );

  // const prepend = () => {
  //   setSlides([
  //     `Slide ${prependNumber.current - 2}`,
  //     `Slide ${prependNumber.current - 1}`,
  //     ...slides,
  //   ]);
  //   prependNumber.current = prependNumber.current - 2;
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  // };

  // const append = () => {
  //   setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  // };

  // const slideTo = (index) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };

const dispatch=useDispatch();

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

 const addToCart=(e)=>{
  const cart=props.cart; 
   cart.push(e)
   console.log(props)
   props.add_cart(cart)
  // dispatch({type: ADDCART, payload: cart})
 }

  return (
    <div>
      <ContentLayout>
        <Banner>
          <Row>
            <Col span={12}>
              <img src={logo} />
              <h1>Moon Rose</h1>
              <p>
                Chúng tôi luôn đặt nhu cầu và mong muốn của khách hàng lên hàng
                đầu
              </p>
              <Link to="/products"><Btn text="Mua sắm ngay"></Btn></Link>
            </Col>
            <Col span={12}>
              <img style={{ width: "100%", padding: 0 }} src={banner} />
            </Col>
          </Row>
        </Banner>
        <Trending>
          <h3>Trending</h3>
          <Swiper
            autoplay={{ delay: 3000 }}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            // centeredSlides={true}
            spaceBetween={30}
            modules={[Autoplay]}
            // pagination={{
            //   type: "fraction",
            // }}
            // navigation={true}
          >
            {/* {slides.map((slideContent, index) => ( */}
           {
             categories.map((e,k)=>{
              return(
                <SlideItem key={k} style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${e.thumbnail})`,
                  backgroundSize:"100% "
               }}>
                 {e.name}
               </SlideItem>
              )
             })
           }
          
          </Swiper>
        </Trending>
        <Collection>
          <h3>New Best Collection</h3>
          <ListProducts>
            <Row>
             {
               products.map((e,k) => {
                return(
                  <Col key={k} span={6}>
            
                  <CartProduct 
                  name={e.name}
                  price={e.finalprice}
                  src={e.thumbnail}
                  addToCart={()=>addToCart(e)}
                  />
                
                </Col>
                )
              })
             }
            </Row>
          </ListProducts>
          <Link to="/">View All</Link>
        </Collection>
        <Sales>
          <h3>Khuyến Mãi</h3>
          <p>Những chương trình khuyến mãi đặc biệt đang diễn ra</p>
          <ContentSales>
            <h1>Up to</h1>
            <h2>30% Off</h2>
            <Btn text="Xem Tất Cả"></Btn>
          </ContentSales>
        </Sales>
        <GeneralComment>
          <h3>Những Đánh Giá Về Chúng Tôi</h3>

          <Row>
            <Col span={8}>
              <EvaluateComponent />
            </Col>
            <Col span={8}>
              <EvaluateComponent />
            </Col>
            <Col span={8}>
              <EvaluateComponent />
            </Col>
          </Row>
        </GeneralComment>
      </ContentLayout>
      
    </div>
  );
};

export default HomePage;
