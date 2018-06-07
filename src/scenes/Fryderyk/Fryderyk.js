import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import VerticalLines from '../../components/VerticalLines/';
import withTranslate from '../../hoc/withTranslate';
import styles from './Fryderyk.styles';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const Fryderyk = ({
  t,
  classes,
}) => (
  <VerticalLines
    counter={2}
    color="#f2f2f2"
    className={classes.page}
  >
    <Section1 translationNamespace="fryderyk.section1" />
    <Section2 translationNamespace="fryderyk.section2" />
    <Section3 translationNamespace="fryderyk.section3" />
    <Section4 translationNamespace="fryderyk.section4" />
    <Section5 translationNamespace="fryderyk.section5" />
  </VerticalLines>
);

Fryderyk.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
};

Fryderyk.defaultProps = {
  t: () => {},
  classes: {},
};

export default compose(
  withTranslate,
  injectSheet(styles),
)(Fryderyk);
