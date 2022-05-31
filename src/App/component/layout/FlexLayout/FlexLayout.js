import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexLayout.module.css';

const FlexLayout = () => (
  <div className={styles.FlexLayout} data-testid="FlexLayout">
    Layout MemeSvg + MemeForm
  </div>
);

FlexLayout.propTypes = {};

FlexLayout.defaultProps = {};

export default FlexLayout;
