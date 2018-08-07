import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';

import withTranslate from '../../../hoc/withTranslate';
import styles from './Section5.styles';

import topLeftImage from './images/top-left.png';
import bottomLeftImage from './images/bottom-left.png';
import topRightImage from './images/top-right.png';
import bottomRightImage from './images/bottom-right.png';

const Section5 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <Container>
    <div className={classes.wrapper}>
      <Content
        size="1.25em"
        offsetYMin={-30}
        offsetYMax={30}
        underline={false}
        textColumnWidth="25%"
        className={classes.topContent}
        text={t(`${translationNamespace}.col1`)}
        title={t(`${translationNamespace}.heading`)}
      />
      <div className={classes.images}>
        <div className={classes.left}>
          <Image
            offsetYMin={-20}
            offsetYMax={20}
            responsive={false}
            src={topLeftImage}
          />
          <Image
            offsetYMin={-10}
            offsetYMax={20}
            responsive={false}
            src={bottomLeftImage}
          />
        </div>
        <div className={classes.right}>
          <Image
            offsetYMin={-100}
            offsetYMax={15}
            responsive={false}
            src={topRightImage}
          />
          <Image
            offsetYMin={-100}
            offsetYMax={15}
            responsive={false}
            src={bottomRightImage}
          />
        </div>
      </div>
    </div>
  </Container>
);

Section5.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section5.defaultProps = {
  classes: {},
  t: () => {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section5);
