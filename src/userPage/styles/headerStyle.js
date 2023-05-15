import { Col } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeaderLayout=styled(Header)`
    background-color: rgba(0,0,0,0);
    color: #333333;
    a{
        padding: 20px 20px;
        color: #333333;
        font-weight: 600;
    }
`;

export const Logo=styled(Col)`
    img{
        width: 50%;
    }
`

export const NavHeader=styled.div`
    
`