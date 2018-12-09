import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import Container from '../../../components/Container';
import Content from '../../../components/Content';
import withTranslate from '../../../hoc/withTranslate';
import TopImage from './TopImage';
import BottomImage from './BottomImage';

import styles from './Section1.styles';

const Section1 = ({ t, classes, translationNamespace }) => (
  <Container>
    <div className={classes.topWrapper}>
      <div className={classes.left}>
        <div className={classes.leftTextBoxWrapper}>
          <Content
            offsetYMin={0}
            offsetYMax={0}
            textColumnWidth="100%"
            className={classes.leftTextBox}
            text={t(`${translationNamespace}.left.col1`)}
            title={t(`${translationNamespace}.left.heading`)}
          />
        </div>
        <div className={classes.greyBox} />
      </div>
      <div className={classes.right}>
        <Content
          offsetYMin={0}
          offsetYMax={0}
          textColumnWidth="50%"
          text={t(`${translationNamespace}.right.col1`)}
          title={t(`${translationNamespace}.right.heading`)}
        />
      </div>
    </div>
    <TopImage />
    <BottomImage />
  </Container>
);

Section1.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section1.defaultProps = {
  t: () => {},
  classes: {},
  translationNamespace: '',
};

export default compose(
  withStyles(styles),
  withTranslate,
)(Section1);
