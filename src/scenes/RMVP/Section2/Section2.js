import { compose } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Container from '../../../components/Container';
import Content from '../../../components/Content';
import Image from '../../../components/Image/Image';
import Paragraph from '../../../components/Paragraph';
import withTranslate from '../../../hoc/withTranslate/withTranslate';

import styles from './Section2.styles';
import image from './images/img1.jpg';

const Section2 = ({ t, classes, translationNamespace }) => (
  <Container>
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <div className={classes.leftTextBoxWrapper}>
          <Content
            size="1.25em"
            offsetYMin={0}
            offsetYMax={0}
            underline={false}
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
          size="1.25em"
          offsetYMin={0}
          offsetYMax={0}
          underline={false}
          textColumnWidth="50%"
          text={t(`${translationNamespace}.right.col1`)}
          title={t(`${translationNamespace}.right.heading`)}
        />
      </div>
    </div>

    <Image
      src={image}
      className={classes.image}
    />

    <Paragraph
      text={t(`${translationNamespace}.paragraph`)}
      className={classes.paragraph}
      offsetYMin={-50}
      offsetYMax={50}
    />
  </Container>
);

Section2.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
  translationNamespace: PropTypes.string,
};

Section2.defaultProps = {
  t: () => {},
  classes: {},
  translationNamespace: '',
};

export default compose(
  withStyles(styles),
  withTranslate,
)(Section2);
