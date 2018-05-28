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
      className={classes.column}
      offsetYMin={-100}
      offsetYMax={0}
    />
    <Image
      src={quickUploadImg}
      className={classes.column}
      offsetYMin={0}
      offsetYMax={50}
    />
    <Image
      src={besSellersImg}
      className={classes.column}
      offsetYMin={-200}
      offsetYMax={0}
    />
    <div className={classes.column}>
      <NewProduct
        offsetYMin={-30}
        offsetYMax={30}
      />
      <Image
        src={statsImg}
        className={classes.statsBox}
        offsetYMin={-15}
        offsetYMax={15}
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
