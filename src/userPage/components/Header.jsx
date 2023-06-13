import React, { useState, useContext } from "react";
// import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logowebclothing.png";
import {
  HeaderLayout,
  Logo,
  NavHeader,
  DropdownStyle,
} from "../styles/headerStyle";
import { Col, Row, Badge, Input, Dropdown, Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import UserContext from "../context/UserContext";
import Btn from "./Btn";

const Header = () => {
  // const countHeart = useSelector((state) => state.counter.value);
  // const total = useSelector((state) => state.counter.total);
  // const numberProductCart = useSelector((state) => state.counter.totalQuantity);
  const items = [
    {
      key: "1",
      label: (
        // <a
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   href="https://www.antgroup.com"
        // >
        //   Tài khoản của tôi
        // </a>
        <NavLink to={"/account"} style={{ background: "red" }}>
          <h5>Tài khoản của tôi</h5>
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to={"/order"}>
          <h5>Đơn hàng</h5>
        </NavLink>
      ),
    },
    {
      key: "3",
      label: <h5>Đăng xuất</h5>,
    },
  ];
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

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
          <SearchOutlined onClick={handleSearch} style={{ fontSize: "25px" }} />
          <NavLink to={"/cart"}>
            <Badge
              count={state.cart.length}
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
          <NavLink to="/favourite">
            <Badge
              count={state.favourite?.length}
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

          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            className="dropd"
          >
            <Button style={{ border: "none" }}>
              <UserOutlined style={{ fontSize: "25px" }} />
            </Button>
          </Dropdown>
        </Col>
        {showSearch && (
          <Input
            placeholder="Tìm kiếm"
            prefix={<SearchOutlined />}
            style={{
              borderRadius: "30px",
              padding: "16px",
              zIndex: 1,
            }}
          />
        )}
      </Row>
    </HeaderLayout>
  );
};

export default Header;
