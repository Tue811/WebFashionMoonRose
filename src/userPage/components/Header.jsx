import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logowebclothing.png";
import { HeaderLayout, Logo, NavHeader } from "../styles/headerStyle";
import { Col, Row, Badge,Input  } from "antd";
import { ShoppingCartOutlined, UserOutlined ,SearchOutlined,HeartOutlined} from "@ant-design/icons";

const Header = () => {
  // const countHeart = useSelector((state) => state.counter.value);
  // const total = useSelector((state) => state.counter.total);
  // const numberProductCart = useSelector((state) => state.counter.totalQuantity);
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch]=useState(false)
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSearch=()=>{
    setShowSearch(!showSearch )
  }

  window.addEventListener("scroll", changeHeader);
  return (
    <HeaderLayout>
      {/* logo */}
      <Row>
        <Logo span={3}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </Logo>

        {/* header nav */}
        <Col span={15}>
          <NavHeader>
            <NavLink to={"/"}>TRANG CHỦ</NavLink>
            <NavLink to={"/products"}>SẢN PHẨM</NavLink>
            <NavLink to={"/about"}>THÔNG TIN</NavLink>
            <NavLink to={"/blog"}>BLOG</NavLink>
            <NavLink to={"/contact"}>LIÊN HỆ</NavLink>
          </NavHeader>
        </Col>
        <Col span={6}>
        <SearchOutlined onClick={handleSearch}  style={{ fontSize: "25px" }} />
          <NavLink to={"/cart"}>
            <Badge
              count={3}
              offset={[10, 10]}
              size="small"
              style={{
                fontSize: "10px",
                backgroundColor: "#DABAAD",
              }}
            >
              <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            </Badge>
          </NavLink>
          <NavLink to="#">
                      <Badge
                        count={5}
                        offset={[10, 10]}
                        size="small"
                        style={{
                          fontSize: "10px",
                          backgroundColor: "#DABAAD",
                        }}
                      >
                        <HeartOutlined style={{ fontSize: "25px" }} />
                      </Badge>
                    </NavLink>
          <NavLink to={"/account"}><UserOutlined  style={{ fontSize: "25px" }} /></NavLink>
        </Col>
        {showSearch &&
        <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />}
        style={{
          borderRadius:"30px",
          padding:"16px",
          zIndex:1
        }}
        />
        }

      </Row>
    </HeaderLayout>
  );
};

export default Header;
