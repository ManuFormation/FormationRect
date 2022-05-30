import React from "react";
import PropTypes from 'prop-types';
import style from './Bouton.module.css'

function Button(props){
    console.log(props)
    return <button className={style.Button} type={props.type}
    style={ {backgroundColor:props.bgColor, color:props.color}}    
    >   
    {props.children}</button>
}

Button.propTypes={
    type:PropTypes.string.isRequired,
    action: PropTypes.func,
    children: PropTypes.any.isRequired,

};

Button.defaultProps={
    type:'button',
    bgColor:'lime',
    color:'white'
}

export default Button;