import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Container.styles';

const Container = ({
  classes,
  children,
}) => (
  <div className={classes.container}>
    {children}
  </div>
);

Container.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
};

Container.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(Container);
