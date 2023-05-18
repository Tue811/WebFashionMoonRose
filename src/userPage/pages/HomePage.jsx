import React from "react";
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
} from "../styles/homepageStyle";
import Btn from "../components/Btn";
import { Col, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CartProduct from "../components/CartProduct";
import { Link } from "react-router-dom";
import EvaluateComponent from "../components/EvaluateComponent";
import banner from "../assets/img/banner.jpg"

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
  return (
    <div>
      
      <ContentLayout>
        <Banner>
          <Row>
          <Col span={12}>
            <h1>Moon Rose</h1>
            <p>
              Chúng tôi luôn đặt nhu cầu và mong muốn của khách hàng lên hàng
              đầu
            </p>
            <Btn text="Mua sắm ngay"></Btn>
          </Col>
          <Col span={12}>
          <img style={{width: "100%"}} src={banner}/>
          </Col>
          </Row>
        </Banner>
        <Trending>
            <h3>Trending</h3>
          <SliderTrending {...settings}>
            <div>
              <b>Babydoll Dress</b>
            </div>
            <div>
              <b>Polo Dress</b>
            </div>
            <div
              style={{
                backgroundImage: `url("https://i.pinimg.com/564x/1f/13/ec/1f13ec6f9d989e7f6ca27ec4fe010408.jpg")`,
              }}
            >
              <b>Shirt Dress</b>
            </div>
            <div>
              <b>T-Shirt</b>
            </div>
            <div>
              <b>Body Dress</b>
            </div>
            <div>
              <b>Trouser</b>
            </div>
          </SliderTrending>
        </Trending>
        <Collection>
        <h3>
            New Best Collection
        </h3>
        <ListProducts>
            <Row>
                <Col span={8}>
                    <CartProduct/>
                </Col>
                <Col span={8}>
                    <CartProduct/>
                </Col>
                <Col span={8}>
                    <CartProduct/>
                </Col>
                <Col span={8}>
                    <CartProduct/>
                </Col>
                <Col span={8}>
                    <CartProduct/>
                </Col>
                <Col span={8}>
                    <CartProduct/>
                </Col>
            </Row>
        </ListProducts>
        <Link to="/">View All</Link>
        </Collection>
        <Sales>
            <h3>
                Khuyến Mãi
            </h3>
            <p>
              Những chương trình khuyến mãi đặc biệt đang diễn ra 
            </p>
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
                <EvaluateComponent/>
              </Col>
              <Col span={8}>
                <EvaluateComponent/>
              </Col>
              <Col span={8}>
                <EvaluateComponent/>
              </Col>
            </Row>
            
        </GeneralComment>
      </ContentLayout>
     
    </div>
  );
};

export default HomePage;
