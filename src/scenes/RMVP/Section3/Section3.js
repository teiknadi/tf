import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import withTranslate from '../../../hoc/withTranslate/withTranslate';

import styles from './Section3.styles';
import TopImage from './TopImage';

const Section3 = ({ classes, translationNamespace, t }) => (
  <div className={classes.wrapper}>
    <Container>
      <Content
        size="1.25em"
        offsetYMin={0}
        offsetYMax={0}
        underline={false}
        textColumnWidth="25%"
        className={classes.textBox}
        text={t(`${translationNamespace}.col1`)}
        title={t(`${translationNamespace}.heading`)}
      />
      <TopImage />
    </Container>
  </div>
);

Section3.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section3.defaultProps = {
  t: () => {},
  classes: {},
  translationNamespace: ''
};

export default compose(
  withStyles(styles),
  withTranslate,
)(Section3);
