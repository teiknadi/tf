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
      offsetYMax={0}
      offsetYMin={-100}
      src={stickyNoteImg}
      imageClassName={classes.column}
    />
    <Image
      offsetYMin={0}
      offsetYMax={50}
      src={quickUploadImg}
      imageClassName={classes.column}
    />
    <Image
      offsetYMax={0}
      offsetYMin={-200}
      src={besSellersImg}
      imageClassName={classes.column}
    />
    <div className={classes.column}>
      <NewProduct
        offsetYMax={30}
        offsetYMin={-30}
      />
      <Image
        src={statsImg}
        offsetYMax={15}
        offsetYMin={-15}
        imageClassName={classes.statsBox}
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
