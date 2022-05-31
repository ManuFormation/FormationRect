import React, { ReactNode, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import style from './Bouton.module.css'

interface IButtonProps{
    type?:'button'|'submit'|'reset',
    action?:Function,
    children:React.ReactElement|Array<ReactNode>|string,
    bgColor?: string,
    color?: string,
    className?: string,
    style?:object,
}

const Button:React.FC<IButtonProps>=(props)=>{       
    
        
    const [iscliked, setIsCliked] = useState(false);

    useEffect(() => {     
        if(iscliked){
           setTimeout( ()=>{setIsCliked(false);}, 230 );
        }
      }, [iscliked]);

    return (
    <button
    className={`${style.Button}${props.className ? " "+ props.className : ""}${iscliked ? " " + style.clicked : ""}`}
    type={props.type}
    style={{
        ...props.style,
         backgroundColor:props.bgColor,
          color: props.color,
          }} 
          onClick={(evt)=>{
            setIsCliked(true);
            if(props.action && typeof props.action==='function'){
            props.action();
            }
          }}
     > 
    {props.children}
    </button>
    );
}

Button.propTypes={
    type: PropTypes.oneOf(['button','submit','reset']),
    action: PropTypes.func,
    children: PropTypes.any.isRequired,
    bgColor:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    className : PropTypes.string,
    style: PropTypes.object,

};

Button.defaultProps={
    type:'button',
    bgColor:'lime',
    color:'white',
}

export default Button; 

export const DefaultButton:React.FC<IButtonProps>=(props)=>
{
    return (
        <Button {...props} bgColor='skyblue'></Button>
    )
}

export const WarningtButton:React.FC<IButtonProps>=(props)=>
{
    return (
        <Button {...props} bgColor='tomato'></Button>
    )
}