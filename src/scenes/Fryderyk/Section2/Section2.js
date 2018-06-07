import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate';
import styles from './Section2.styles';

import imageUrl from './images/box.jpg';
import rect1Url from './images/rectangle-1.jpg';
import rect2Url from './images/rectangle-2.jpg';
import rect3Url from './images/rectangle-3.jpg';
import rect4Url from './images/rectangle-4.jpg';

const Section2 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <Container>
    <div className={classes.wrapper}>
      <div className={classes.colLeft}>
        <Content
          text={t(`${translationNamespace}.colLeft.col1`)}
          title={t(`${translationNamespace}.colLeft.heading`)}
          textColumnWidth="50%"
          offsetYMin={-10}
          offsetYMax={10}
          className={classes.colLeftContent}
        />

        <div className={classes.imagesWrap}>
          <Image
            src={rect1Url}
            offsetYMin={-400}
            offsetYMax={400}
            responsive={false}
          />
          <Image
            src={rect2Url}
            offsetYMin={-200}
            offsetYMax={200}
            responsive={false}
          />
          <Image
            src={rect3Url}
            offsetYMin={-100}
            offsetYMax={100}
            responsive={false}
          />
        </div>
      </div>

      <div className={classes.colRight}>
        <Content
          text={t(`${translationNamespace}.colRight.col1`)}
          title={t(`${translationNamespace}.colRight.heading`)}
          textColumnWidth="50%"
          offsetYMin={-30}
          offsetYMax={30}
        />

        <div className={classes.colRightImages}>
          <Image
            src={imageUrl}
            offsetYMin={-40}
            offsetYMax={40}
            imageClassName={classes.image}
          />

          <Image
            src={rect4Url}
            offsetYMin={-400}
            offsetYMax={400}
            responsive={false}
          />
        </div>
      </div>
    </div>
  </Container>
);

Section2.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section2.defaultProps = {
  classes: {},
  t: () => {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section2);
