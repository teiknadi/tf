import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'ramda';
import { Parallax } from 'react-scroll-parallax';

import withTranslate from '../../hoc/withTranslate';

import { colors } from '../../styles/constants';
import styles from './N42CMS.styles';

import Container from '../../components/Container';
import Content from '../../components/Content';
import VerticalLines from '../../components/VerticalLines';
import VerticalSeparator from '../../components/VerticalSeparator';
import Paragraph from '../../components/Paragraph';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const N42CMS = ({
  t,
  classes,
}) => (
  <VerticalLines
    counter={3}
    color={colors.n42CmsLines}
    className={classes.page}
  >
    <Container>
      <Content
        text={[
          t('n42Cms.description.col1'),
          t('n42Cms.description.col2')
        ]}
        title={t('n42Cms.heading')}
        className={classes.section1}
        textColumnWidth="25%"
        offsetYMin={-70}
        offsetYMax={50}
      />

      <Content
        title={t('n42Cms.letsDesign.title')}
        text={t('n42Cms.letsDesign.col1')}
        className={classes.section2}
        textColumnWidth="25%"
        offsetYMin={-70}
        offsetYMax={50}
      />

      <Section1 />

      <VerticalSeparator
        position="right"
      />

      <Parallax offsetYMin={-70} offsetYMax={50}>
        <Paragraph
          text={t('n42Cms.bigParagraph')}
          className={classes.bigParagraph}
        />
      </Parallax>

      <Section2
        text={t('n42Cms.secondSection.text')}
        title={t('n42Cms.secondSection.title')}
      />

      <VerticalSeparator
        position="middle"
      />

      <Section3
        title={t('n42Cms.thirdSection.title')}
        text={t('n42Cms.thirdSection.text')}
      />

      <VerticalSeparator
        position="left"
      />

      <Section4
        title={t('n42Cms.fourthSection.title')}
        text={t('n42Cms.fourthSection.text')}
      />

      <Section5
        title={t('n42Cms.section5.title')}
        text={t('n42Cms.section5.text')}
      />
    </Container>
  </VerticalLines>
);

N42CMS.propTypes = {
  t: PropTypes.func,
  classes: PropTypes.object,
};

N42CMS.defaultProps = {
  t: () => {},
  classes: {},
};

export default compose(
  withTranslate,
  injectSheet(styles),
)(N42CMS);
