import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate';
import List from './List/List';
import styles from './Section2.styles';

import topPhoneImageUrl from './images/comma-oil-phone.png';
import oilThumbnailImageUrl from './images/oil-thumbnail-box.jpg';
import blogBoxImageUrl from './images/blog-box.jpg';

const Section2 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <Container>
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <Image
          src={topPhoneImageUrl}
          offsetYMin={-10}
          offsetYMax={10}
        />

        <Content
          size="1.5em"
          underline={false}
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colLeft.s1.col`)}
          title={t(`${translationNamespace}.colLeft.s1.heading`)}
          offsetYMin={-30}
          offsetYMax={30}
        />

        <Image
          src={oilThumbnailImageUrl}
          offsetYMin={-30}
          offsetYMax={30}
        />
      </div>

      <div className={classes.col}>
        <Content
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colRight.s1.col`)}
          title={t(`${translationNamespace}.colRight.s1.heading`)}
          offsetYMin={-40}
          offsetYMax={40}
        />

        <Parallax offsetYMin={-15} offsetYMax={15}>
          <List
            title="dare &mdash;&nbsp;enough"
          />
        </Parallax>

        <Image
          src={blogBoxImageUrl}
          offsetYMin={-10}
          offsetYMax={10}
        />
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
  withTranslate,
  injectSheet(styles),
)(Section2);
