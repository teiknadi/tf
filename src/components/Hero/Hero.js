import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Hero.styles';

const Hero = ({ classes, children, scene, title }) => {
  return (
    <div className={classes.heroBackground}>
      {children}
    </div>
  );
};

Hero.propTypes = {
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Hero);
