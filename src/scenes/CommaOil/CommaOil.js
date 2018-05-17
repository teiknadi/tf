import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Container from '../../components/Container';
import Paragraph from '../../components/Paragraph';
import VerticalLines from '../../components/VerticalLines';
import withTranslate from '../../hoc/withTranslate';
import BigMap from './BigMap';
import styles from './CommaOil.styles';
import HorizontalLines from './HorizontalLines';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SmallMap from './SmallMap';

const lines = [
  { top: '20%', position: 'left', width: '25%' },
  { top: '30%', position: 'right', width: '35%' },
  { top: '40%', position: 'left', width: '35%' },
  { top: '50%', position: 'left', width: '5%' },
  { top: '50%', position: 'right', width: '40%' },
];

const CommaOil = ({
  t,
  classes,
}) => (
  <VerticalLines
    counter={3}
    color="#e4e4e4"
    className={classes.page}
  >
    <Section1
      translationNamespace="commaOil.section1"
    />

    <HorizontalLines
      items={lines}
    />

    <Section2
      translationNamespace="commaOil.section2"
    />

    <Container>
      <Parallax offsetYMin={-50} offsetYMax={50}>
        <Paragraph
          hasCross
          className={classes.paragraph}
          text={t('commaOil.paragraph')}
        />
      </Parallax>
    </Container>

    <Section3
      translationNamespace="commaOil.section3"
    />

    <SmallMap />
    <BigMap />
  </VerticalLines>
);

CommaOil.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
};

CommaOil.defaultProps = {
  t: () => {},
  classes: {},
};

export default compose(
  withTranslate,
  injectSheet(styles),
)(CommaOil);
