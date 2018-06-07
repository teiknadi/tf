import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';

import withTranslate from '../../../hoc/withTranslate';
import styles from './Section4.styles';

import topImageUrl from './images/top-image.png';
import middleImageUrl from './images/middle-image.png';
import bottomImageUrl from './images/bottom-image.jpg';

const Section4 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <Container>
    <div className={classes.wrapper}>
      <Content
        size="1.25em"
        offsetYMin={-70}
        offsetYMax={10}
        underline={false}
        textColumnWidth="50%"
        className={classes.topContent}
        text={t(`${translationNamespace}.col1`)}
        title={t(`${translationNamespace}.heading`)}
      />
      <div className={classes.images}>
        <Image
          offsetYMin={-20}
          offsetYMax={20}
          responsive={false}
          src={topImageUrl}
        />
        <Image
          offsetYMin={-20}
          offsetYMax={20}
          responsive={false}
          src={middleImageUrl}
        />
        <Image
          offsetYMin={-20}
          offsetYMax={20}
          responsive={false}
          src={bottomImageUrl}
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
  classes: {},
  t: () => {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section4);
