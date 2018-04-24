import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './NewProduct.styles';

import { Parallax } from 'react-scroll-parallax';

import topImg from './images/new-product-top.jpg';
import bottomImg from './images/new-product-bottom.jpg';

const NewProduct = props => (
  <Parallax
    {...props}
    className={props.classes.parallaxWrapper}
  >
    <div className={props.classes.wrapper}>
      <img
        src={topImg}
        alt="slided menu"
        className={props.classes.top}
      />
      <img
        src={bottomImg}
        alt="box"
        className={props.classes.bottom}
      />
    </div>
  </Parallax>
);

NewProduct.propTypes = {
  classes: PropTypes.object,
};

NewProduct.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(NewProduct);
