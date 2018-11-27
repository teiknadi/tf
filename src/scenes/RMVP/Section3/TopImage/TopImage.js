import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import styles from './TopImage.styles';

import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';

const TopImage = ({ classes }) => (
  <div className={classes.wrapper}>
    <img src={img1} className={classes.img} alt="column" />
    <img src={img2} className={classes.img} alt="column" />
    <img src={img3} className={classes.img} alt="column" />
    <img src={img4} className={classes.img} alt="column" />
    <img src={img5} className={classes.img} alt="column" />
  </div>
);

TopImage.propTypes = {
  classes: PropTypes.object,
};

TopImage.defaultProps = {
  classes: {},
};

export default withStyles(styles)(TopImage);
