import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Header.styles';

import Logo from './Logo';

const Header = ({ classes, isVisible }) => isVisible && (
  <div className={classes.container}>
    <Logo/>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isVisible: PropTypes.bool
};

Header.defaultProps = {
  isVisible: true
};

export default injectSheet(styles)(Header);
