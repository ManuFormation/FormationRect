import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.js'
const initialState={};

const TemplateName= (props) => {
    const [state , setstate]= useState(initialState);
    useEffect(() => {
      return () => {
       console.log("TemplateName monté")      };
    }, [])

  return (
    <div className={style.TemplateName} date-testid='TemplateName'>templateName</div>
  )
}

TemplateName.propTypes = {}

export default TemplateName
