import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Image from '../../../../components/Image';

import styles from './BottomImage.styles';

import img1 from './images/img-1.png';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.png';
import img4 from './images/img-4.png';
import img5 from './images/img-5.jpg';

const BottomImage = ({ classes }) => (
  <div className={classes.wrapper}>
    <Image
      src={img1}
      className={classes.img1}
    />
    <Image
      src={img2}
      className={classes.img2}
    />
    <Image
      src={img3}
      className={classes.img3}
    />
    <Image
      src={img4}
      className={classes.img4}
    />
    <Image
      src={img5}
      className={classes.img5}
    />
  </div>
);

BottomImage.propTypes = {
  classes: PropTypes.object,
};

BottomImage.defaultProps = {
  classes: {},
};

export default withStyles(styles)(BottomImage);
