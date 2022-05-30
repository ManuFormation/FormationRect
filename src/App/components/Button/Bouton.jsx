import React from "react";

function Button(props){
    console.log()
    return <button type={props.type}>{props.children}</button>
}

export default Button;