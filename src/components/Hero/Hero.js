import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import styles from './Hero.styles';

import Intro from './Intro';

const Hero = ({ classes, children, scene, title, intro, route }) => {
  const Hero = (
    <div className={classes.cover}>
      <div className={classes.container}>
        <div className={[classes.lane, classes.firstLane].join(' ')}>
          { intro && <Intro body={intro}/>}
        </div>
        <div className={classes.lane}>
        </div>
        <div className={classes.lane}>
        </div>
        {children}
      </div>
    </div>
  );

  if (route) {
    return <Link to={route}>{Hero}</Link>;
  }

  return Hero;
};

Hero.propTypes = {
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  route: PropTypes.string
};

Hero.defaultProps = {
  intro: '',
  route: ''
};

export default injectSheet(styles)(Hero);
