import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import withTranslate from '../../../hoc/withTranslate';
import styles from './Section1.styles';

import Content from '../../../components/Content';
import Container from '../../../components/Container';
import Image from '../../../components/Image';

import imageUrl from './images/wires.jpg';

const Section1 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <div className={classes.wrapper}>
    <Container>
      <Content
        text={[
          t(`${translationNamespace}.col1`),
          t(`${translationNamespace}.col2`),
        ]}
        title={t(`${translationNamespace}.heading`)}
        textColumnWidth="25%"
        className={classes.columns}
        offsetYMin={-10}
        offsetYMax={10}
      />

      <Image
        src={imageUrl}
        offsetYMin={-30}
        offsetYMax={30}
      />
    </Container>
  </div>
);

Section1.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section1.defaultProps = {
  classes: {},
  t: () => {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section1);
