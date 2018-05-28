import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Content from '../../../components/Content';
import ImageSection from './Image';
import styles from './Section3.styles';

const Section3 = ({
  text,
  title,
  classes,
}) => (
  <div className={classes.wrapper}>
    <Parallax
      offsetYMin={-70}
      offsetYMax={0}
    >
      <Content
        text={text}
        size="1.5em"
        title={title}
        underline={false}
        textColumnWidth="25%"
      />

      <ImageSection />
    </Parallax>
  </div>
);

Section3.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.object,
};

Section3.defaultProps = {
  title: '',
  text: '',
  classes: {},
};

export default injectSheet(styles)(Section3);
