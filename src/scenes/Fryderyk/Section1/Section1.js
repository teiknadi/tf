import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate';
import styles from './Section1.styles';
import imageUrl from './images/fryderyk-sketch.jpg';

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
        offsetYMin={0}
        offsetYMax={0}
      />
    </Container>

    <Image
      src={imageUrl}
      offsetYMin={0}
      offsetYMax={0}
      imageClassName={classes.image}
    />
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
