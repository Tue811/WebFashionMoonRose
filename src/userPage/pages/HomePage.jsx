import React, { useRef, useState } from "react";
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

// // Import Swiper styles

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
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
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/18/e6/f3/18e6f337b150eb7f37d9e725b9f944a5.jpg)",
               backgroundSize:"100% "
            }}>
              Babydoll Dress
            </SlideItem>
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/52/d3/4c/52d34cecfaea58ad65945f93a4ee35ce.jpg)",
               backgroundSize:"100% "
            }}>
              Polo Dress
            </SlideItem>
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/52/d3/4c/52d34cecfaea58ad65945f93a4ee35ce.jpg)",
               backgroundSize:"100% "
            }}>
              Shirt Dress
            </SlideItem>
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/52/d3/4c/52d34cecfaea58ad65945f93a4ee35ce.jpg)",
               backgroundSize:"100% "
            }}>
              Blazer
            </SlideItem>
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/52/d3/4c/52d34cecfaea58ad65945f93a4ee35ce.jpg)",
               backgroundSize:"100% "
            }}>
              T-Shirt
            </SlideItem>
            <SlideItem style={{
               background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/564x/52/d3/4c/52d34cecfaea58ad65945f93a4ee35ce.jpg)",
               backgroundSize:"100% "
            }}>
            </SlideItem>

            {/* ))} */}
          </Swiper>
        </Trending>
        <Collection>
          <h3>New Best Collection</h3>
          <ListProducts>
            <Row>
              <Col span={8}>
                <CartProduct />
              </Col>
              <Col span={8}>
                <CartProduct />
              </Col>
              <Col span={8}>
                <CartProduct />
              </Col>
              <Col span={8}>
                <CartProduct />
              </Col>
              <Col span={8}>
                <CartProduct />
              </Col>
              <Col span={8}>
                <CartProduct />
              </Col>
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
