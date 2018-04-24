import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Image.styles';

import { Parallax } from 'react-scroll-parallax';

const Image = (props) => {
  return (
    <Parallax {...props}>
      <img
        src={props.src}
        alt={props.alt}
        className={props.classes.image}
      />
    </Parallax>
  );
};

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

export default injectSheet(styles)(Image);
