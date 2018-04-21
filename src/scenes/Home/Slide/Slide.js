import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Slide.styles';

import Hero from '../../../components/Hero';

class Slide extends React.Component {
  render() {
    const { classes, scene, title, description, intro, route } = this.props;

    return <article className={`slide ${scene} ${classes.content}`}>
      <Hero scene={scene} title={title} description={description} intro={intro} route={route}></Hero>
    </article>;
  }
}

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  route: PropTypes.string
};

Slide.defaultProps = {
  route: ''
};

export default injectSheet(styles)(Slide);
