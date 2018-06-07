import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate';
import styles from './Section3.styles';

import leftFilter from './images/filter-left.png';
import rightFilter from './images/filter-right.png';
import calendarLeft from './images/calendar-left.jpg';
import calendarRight from './images/calendar-right.jpg';
import datepicker from './images/datepicker.png';

const Section3 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.inner}>
      <Container>
        <Content
          size="1.25em"
          offsetYMin={-30}
          offsetYMax={30}
          underline={false}
          textColumnWidth="50%"
          className={classes.topContent}
          text={t(`${translationNamespace}.s1.col1`)}
          title={t(`${translationNamespace}.s1.heading`)}
        />
      </Container>

      <div className={classes.top}>
        <Image
          offsetYMin={-100}
          offsetYMax={20}
          src={calendarLeft}
          className={classes.bigImageContainer}
          imageClassName={classes.bigImage}
        />
        <Image
          offsetYMin={-10}
          offsetYMax={30}
          src={calendarRight}
          className={classes.bigImageContainer}
          imageClassName={classes.bigImage}
        />
      </div>

      <Container>
        <Content
          size="1.25em"
          offsetYMin={-20}
          offsetYMax={20}
          underline={false}
          textColumnWidth="25%"
          className={classes.bottomContent}
          text={t(`${translationNamespace}.s2.col1`)}
          title={t(`${translationNamespace}.s2.heading`)}
        />
        <div className={classes.bottom}>
          <Image
            offsetYMin={-20}
            offsetYMax={20}
            src={leftFilter}
            responsive={false}
          />
          <Image
            offsetYMin={-100}
            offsetYMax={40}
            src={datepicker}
            responsive={false}
          />
          <Image
            offsetYMin={-200}
            offsetYMax={30}
            src={rightFilter}
            responsive={false}
          />
        </div>
      </Container>
    </div>

    <div className={classes.bigRectangle} />
  </div>
);

Section3.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section3.defaultProps = {
  classes: {},
  t: () => {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section3);
