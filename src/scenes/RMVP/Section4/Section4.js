import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate/withTranslate';

import styles from './Section4.styles';

import topLeftImg from './images/top-left.png';
import bottomLeftImg from './images/bottom-left.png';
import rightImg from './images/right.png';

const Section4 = ({ classes, translationNamespace, t }) => (
  <Container>
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Image
          src={topLeftImg}
        />

        <Image
          src={bottomLeftImg}
        />
      </div>
      <div className={classes.right}>
        <Content
          size="1.25em"
          offsetYMin={0}
          offsetYMax={0}
          underline={false}
          textColumnWidth="50%"
          text={t(`${translationNamespace}.col1`)}
          title={t(`${translationNamespace}.heading`)}
        />

        <Image
          src={rightImg}
        />
      </div>
    </div>
  </Container>
);

Section4.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section4.defaultProps = {
  t: () => {},
  classes: {},
  translationNamespace: '',
};

export default compose(
  withStyles(styles),
  withTranslate,
)(Section4);
