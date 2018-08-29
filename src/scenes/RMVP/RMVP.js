import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import VerticalLines from '../../components/VerticalLines';
import styles from './RMVP.styles';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const RMVP = ({
  classes,
}) => (
  <VerticalLines
    counter={3}
    color="#dddddd"
    className={classes.page}
  >
    <Section1 translationNamespace="rmvp.section1" />
    {/*<Section2 translationNamespace="rmvp.section2" />*/}
    {/*<Section3 translationNamespace="rmvp.section3" />*/}
    {/*<Section4 translationNamespace="rmvp.section4" />*/}
  </VerticalLines>
);

RMVP.propTypes = {
  classes: PropTypes.object,
};

RMVP.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(RMVP);
