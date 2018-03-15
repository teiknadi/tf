import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import styles from './Logo.styles';

import * as ROUTES from '../../../routes'

const Logo = ({ classes }) => (
  <Link to={ROUTES.HOME}>
    <h1 className={classes.logo}>Tomasz Foltman</h1>
  </Link>
);

Logo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Logo);
