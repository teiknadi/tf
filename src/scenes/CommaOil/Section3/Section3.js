import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import withTranslate from '../../../hoc/withTranslate';
import styles from './Section3.styles';

import lastProjectLongImage from './images/last-projects-long.jpg';
import lastProjectImage from './images/last-projects.jpg';
import chartImage from './images/chart.png';
import buttonsImage from './images/buttons.png';

const Section3 = ({
  t,
  classes,
  translationNamespace,
}) => (
  <Container>
    <div className={classes.wrapper}>
      <div className={classes.col}>
        <Content
          size="1.5em"
          underline={false}
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colLeft.s1.col`)}
          title={t(`${translationNamespace}.colLeft.s1.heading`)}
          offsetYMin={-20}
          offsetYMax={20}
        />

        <Image
          src={lastProjectImage}
          offsetYMin={-40}
          offsetYMax={20}
        />

        <Content
          size="1.5em"
          underline={false}
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colLeft.s2.col`)}
          title={t(`${translationNamespace}.colLeft.s2.heading`)}
          offsetYMin={-40}
          offsetYMax={40}
        />

        <Image
          src={buttonsImage}
          offsetYMin={-40}
          offsetYMax={15}
        />

        <Content
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colLeft.s3.col`)}
          title={t(`${translationNamespace}.colLeft.s3.heading`)}
          offsetYMin={-20}
          offsetYMax={20}
        />
      </div>

      <div className={classes.col}>
        <Image
          src={chartImage}
          className={classes.chartImage}
          offsetYMin={-50}
          offsetYMax={50}
        />

        <Content
          size="1.5em"
          underline={false}
          textColumnWidth="100%"
          text={t(`${translationNamespace}.colRight.s1.col`)}
          title={t(`${translationNamespace}.colRight.s1.heading`)}
          offsetYMin={-35}
          offsetYMax={35}
        />

        <Image
          src={lastProjectLongImage}
          offsetYMin={-15}
          offsetYMax={15}
        />
      </div>
    </div>
  </Container>
);

Section3.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section3.defaultProps = {
  t: () => {},
  classes: {},
  translationNamespace: '',
};

export default compose(
  injectSheet(styles),
  withTranslate,
)(Section3);
