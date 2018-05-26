import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Image.styles';

import { Parallax } from 'react-scroll-parallax';

const Image = ({
  src,
  alt,
  classes,
  ...parallaxOptions
}, context) => (
  <Parallax {...parallaxOptions}>
    <img
      src={src}
      alt={alt}
      className={classes.image}
      onLoad={context.parallaxController.update}
    />
  </Parallax>
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.object,
};

Image.defaultProps = {
  src: '',
  alt: '',
  classes: {},
};

Image.contextTypes = {
  parallaxController: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Image);
