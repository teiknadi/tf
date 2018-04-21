import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { TweenLite } from 'gsap';

import styles from './Hero.styles';

import Intro from './Intro';
import Title from './Title';
import Description from './Description';

class Hero extends React.Component {
  componentDidMount () {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount () {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(e) {
    const { intro } = this;

    const shift = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    console.log(shift, e);
    if (shift >= 0) {
    } else {
    }

    TweenLite.to(this.intro, 0.1, {x: 1000});
  }

  render() {
    const { classes, children, scene, title, intro, description, route } = this.props;

    console.log(description)

    const Hero = (
      <div className={classes.cover}>
        <div className={classes.container}>
          <div className={[classes.lane, classes.firstLane].join(' ')}>
            {intro && <Intro ref={(c) => this.intro = c } body={intro} /> }
          </div>
          <div className={classes.lane}>
            <div className={classes.counter}>
              <span className={classes.currentSlide}>00</span>
              <div><div></div></div>
              <div><div></div></div>
              <div><div></div></div>
              <div><div></div></div>
              <span className={classes.numberOfSlides}>06</span>
            </div>
            {title && <Title body={title}/>}
            {description && <Description body={description}/>}
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
  }
};

Hero.propTypes = {
  scene: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.string,
  route: PropTypes.string
};

Hero.defaultProps = {
  intro: '',
  title: '',
  description: '',
  route: ''
};

export default injectSheet(styles)(Hero);
