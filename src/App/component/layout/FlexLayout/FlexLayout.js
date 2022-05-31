import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexLayout.module.css';
import { propTypes } from 'react-bootstrap/esm/Image';

const FlexLayout = (props) => (
  <div className={styles.FlexLayout} data-testid="FlexLayout">
    {props.children}
  </div>
);

FlexLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
    ]).isRequired,
};

export default FlexLayout;
