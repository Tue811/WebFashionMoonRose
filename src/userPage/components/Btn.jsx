import { Button } from 'antd';
import React from 'react';


interface Props {
    text: string;
}

const Btn = (props: Props) => {
    const buttonstyle = {  
        color: "white",  
        backgroundColor: "#DABAAD",  
        padding: "15px 30px 15px 30px", 
        fontWeight:"900",
        height:"auto",
        fontSize:"15px",
        letterSpacing: "1px",
        
      }; 
    return (
        <Button style={buttonstyle}>
             {props.text}
        </Button>
    );
};

export default Btn;