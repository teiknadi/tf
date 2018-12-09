import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Image from '../../../../components/Image';

import styles from './TopImage.styles';

import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';

const TopImage = ({ classes }) => (
  <div className={classes.wrapper}>
    <Image
      src={img1}
      className={classes.img1Wrapper}
    />

    <Image
      src={img2}
      className={classes.img2Wrapper}
      imageClassName={classes.img2}
    />
  </div>
);

TopImage.propTypes = {
  classes: PropTypes.object,
};

TopImage.defaultProps = {
  classes: {},
};

export default withStyles(styles)(TopImage);
