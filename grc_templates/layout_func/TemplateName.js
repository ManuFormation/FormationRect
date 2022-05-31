import React from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.js.js.js'

const TemplateName= (props) => {
  return (
    <div className={style.TemplateName} date-testid='TemplateName'>
    {props.children}
    </div>
  )
}

TemplateName.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    ]).isRequired,
};

export default TemplateName
