import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Section1.styles';

import Image from '../../../components/Image';
import NewProduct from './NewProduct';

import besSellersImg from './images/best-sellers.jpg';
import quickUploadImg from './images/quick-upload.jpg';
import statsImg from './images/stats.jpg';
import stickyNoteImg from './images/sticky_note.jpg';

const Section1 = ({
  classes
}) => (
  <div className={classes.section}>
    <Image
      src={stickyNoteImg}
      offsetYMin={-100}
      offsetYMax={100}
      className={[classes.column, classes.stickyNoteBox].join(' ')}
    />
    <Image
      src={quickUploadImg}
      offsetYMin={-50}
      offsetYMax={50}
      className={classes.column}
    />
    <Image
      src={besSellersImg}
      offsetYMin={-100}
      offsetYMax={100}
      className={classes.column}
    />
    <div className={classes.column}>
      <NewProduct
        offsetYMin={-50}
        offsetYMax={50}
      />
      <Image
        src={statsImg}
        offsetYMin={-70}
        offsetYMax={70}
        className={classes.statsBox}
      />
    </div>
  </div>
);

Section1.propTypes = {
  classes: PropTypes.object,
};

Section1.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(Section1);
