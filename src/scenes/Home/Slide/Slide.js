import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Slide.styles';

import Hero from '../../../components/Hero';

const Slide = ({ classes, scene, title }) => (
  <article className={classes.content}>
    <Hero scene={scene} title={title}>aa</Hero>
  </article>
);

Slide.propTypes = {
  classes: PropTypes.object.isRequired,
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Slide);
