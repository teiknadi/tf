import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Image.styles';

import leftImg from './images/image-left.png';
import middleImg from './images/image-middle.png';
import rightImg from './images/image-right.png';

const Image = ({
  classes,
}) => (
  <div className={classes.wrapper}>
    <img className={classes.left} src={leftImg}/>
    <img className={classes.middle} src={middleImg}/>
    <img className={classes.right} src={rightImg}/>
  </div>
);

Image.propTypes = {
  classes: PropTypes.object,
};

Image.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(Image);
