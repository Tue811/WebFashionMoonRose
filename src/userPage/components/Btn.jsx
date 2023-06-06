import { Button } from 'antd';
import React from 'react';




const Btn = ({text}) => {
    const buttonstyle = {  
        color: "white",  
        backgroundColor: "#DABAAD",  
        padding: "10px 20px 10px 30px", 
        fontWeight:"900",
        height:"auto",
        fontSize:"16px",
        letterSpacing: "1px",
        
      }; 
    return (
        <Button style={buttonstyle}>
             {text}
        </Button>
    );
};

export default Btn;