import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Home.styles';

import Slide from './Slide';

const Home = ({ classes }) => (
  <section className={ classes.container }>
    <Slide key="1" scene="Home" title="Home"/>
    <Slide key="2" scene="Fryderyk" title="Fryderyk"/>
  </section>
);

Slide.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Home);
