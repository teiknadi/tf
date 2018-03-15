import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TimelineLite } from 'gsap';

import styles from './Home.styles';

import Slide from './Slide';

import * as ROUTES from '../../routes'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.timeline = new TimelineLite();

    this.state = {
      active: 0,
      duration: .6,
      carouselHeight: 0,
      carouselWidth: 0,
      windowWidth: 0,
      isCarouselReady: false,
      scrollingTimeout: null
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount () {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleWheel);
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
        isCarouselReady: true
      }));
  }

  handleResize() {
    const { timeline, carousel } = this;
    const { active, isCarouselReady, carouselWidth, windowWidth } = this.state;
    const slides = carousel.children;
    const image = carousel.children[0].children[0];

    if (!isCarouselReady || windowWidth === window.innerWidth || carouselWidth === carousel.clientWidth) {
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

    timeline.fromTo(slides[active], duration, {x: 0}, {x: -width})
      .set(slides[active], {x: width});

    const current = (active === (slides.length - 1)) ? 0 : active + 1;

    timeline.fromTo(slides[current], duration, {x: width}, {x: 0}, `-=${duration}`)
      .eventCallback('onComplete', this.setState({ active: current }));
  }

  handlePrev() {
    const { timeline, carousel } = this;
    const { active, duration } = this.state;
    const slides = carousel.children;
    const width = carousel.clientWidth;

    if (timeline.isActive()) {
      return;
    }

    timeline.fromTo(slides[active], duration, {x: 0}, {x: width});

    const current = (active === 0) ? slides.length - 1 : active - 1;

    timeline.fromTo(slides[current], duration, {x: -width}, {x: 0}, `-=${duration}`)
      .eventCallback('onComplete', this.setState({ active: current }));
  }

  handleWheel(e) {
    const { scrollingTimeout } = this.state;

    if (scrollingTimeout) {
      return;
    }

    const shift = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    if (shift >= 0) {
      this.handleNext();
    } else {
      this.handlePrev();
    }

    const timeout = setTimeout(() => {
      clearTimeout(scrollingTimeout);

      this.setState({ scrollingTimeout: null });
    }, 1500);

    this.setState({ scrollingTimeout: timeout });
  }

  render() {
    const { classes } = this.props;

    const slides = [
      {
        scene: "Home",
        title: "",
        intro: `WE WERE DARE ENOUGH
       TO MAKE EVERYTHING VERY VERY SIMPLE
       AND STRAIGHTFORWARD. WE WILL ALWAYS
       REMEMBER, THAT SIMPLE IS AND WILL BE
       BIG THING`
      },
      {
        scene: "Fryderyk",
        title: "FRYDERYK",
        intro: "",
        route: ROUTES.FRYDERYK
      },
      {
        scene: "ArtsRepublic",
        title: "ARTS REPUBLIC",
        intro: "",
        route: ROUTES.ARTS_REPUBLIC
      },
      {
        scene: "RMVP",
        title: "RMVP",
        intro: "",
        route: ROUTES.RMVP
      },
      {
        scene: "CommaOil",
        title: "COMMA OIL",
        intro: "",
        route: ROUTES.COMMA_OIL
      },
      {
        scene: "N42CMS",
        title: "NETRO42 CMS",
        intro: "",
        route: ROUTES.N42_CMS
      },
    ];

    return (
      <div
        ref={(carousel) => { this.carousel = carousel }}
        className={classes.carousel}
      >
        { slides.map((item, key) => <Slide
            key={key}
            index={key}
            scene={item.scene}
            title={item.title}
            intro={item.intro}
            route={item.route}
          />
        ) }
      </div>
    );
}
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Home);
