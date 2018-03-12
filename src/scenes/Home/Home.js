import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TimelineLite } from 'gsap';

import styles from './Home.styles';

import Slide from './Slide';
import ArtsRepublic from "../ArtsRepublic";
import RMVP from "../RMVP";
import CommaOil from "../CommaOil";
import N42CMS from "../N42CMS";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.timeline = new TimelineLite();

    this.state = {
      active: 0,
      duration: .5,
      carouselHeight: 0,
      carouselWidth: 0,
      windowWidth: 0,
      ready: false
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount () {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('resize', this.handleResize);
  }

  handleLoad() {
    const { timeline, carousel } = this;
    const { active } = this.state;
    const slides = carousel.children;
    const image = carousel.children[0].children[0];

    const disabledSlides = Array.from(slides).filter((item, index) => index !== active);
    const width = carousel.clientWidth;
    const height = (image.naturalHeight / image.naturalWidth) * width;

    timeline.set(disabledSlides, { x: width, display: 'block' })
      .eventCallback('onComplete', this.setState({
        carouselHeight: height,
        carouselWidth: width,
        windowWidth: window.innerWidth,
        ready: true
      }));
  }

  handleResize() {
    const { timeline, carousel } = this;
    const { active, ready, carouselWidth, windowWidth } = this.state;
    const slides = carousel.children;
    const image = carousel.children[0].children[0];

    if (!ready || windowWidth === window.innerWidth || carouselWidth === carousel.clientWidth) {
      return;
    }

    const disabledSlides = Array.from(slides).filter((item, index) => index !== active);
    const width = carousel.clientWidth;
    const height = (image.naturalHeight / image.naturalWidth) * width;

    timeline.set(disabledSlides, { x: width })
      .eventCallback('onComplete', this.setState({
        carouselHeight: height,
        carouselWidth: width,
        windowWidth: window.innerWidth
      }));
  };

  handleNext() {
    const { timeline, carousel } = this;
    const { active, duration } = this.state;
    const slides = carousel.children;
    const width = carousel.clientWidth;

    if (timeline.isActive()) {
      return;
    }

    let current = active;

    timeline.fromTo(slides[current], duration, {x: 0}, {x: -width})
      .set(slides[current], {x: width});

    current = (current === (slides.length - 1)) ? 0 : current + 1;

    timeline.fromTo(slides[current], duration, {x: width}, {x: 0}, `-=${duration}`)
      .eventCallback('onComplete', this.setState({ active: current }));
  }

  render() {
    const { classes } = this.props;

    const slides = [
      {scene: "Home", title: "Home"},
      {scene: "Fryderyk", title: "Fryderyk"},
      {scene: "ArtsRepublic", title: "Arts Republic"},
      {scene: "RMVP", title: "RMVP"},
      {scene: "CommaOil", title: "Comma Oil"},
      {scene: "N42CMS", title: "Netro42 CMS"},
    ];

    return <div className={classes.container} ref={(carousel) => { this.carousel = carousel }}>
      { slides.map((item, key) => <Slide
          key={key}
          index={key}
          scene={item.scene}
          title={item.title}
          handleNext={this.handleNext}
        />
      ) }
    </div>;
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Home);
