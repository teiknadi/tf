import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Slide.styles';

import Hero from '../../../components/Hero';

class Slide extends React.Component {
  render() {
    const { classes, scene, title, handleNext } = this.props;

    return <article className={`slide ${scene} ${classes.content}`} onClick={handleNext}>
      <Hero scene={scene} title={title}></Hero>
    </article>;
  }
};

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Slide);
