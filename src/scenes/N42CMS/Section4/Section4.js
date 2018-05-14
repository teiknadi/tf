import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import styles from './Section4.styles';

import clothesBoxImg from './images/clothes-box.jpg';
import newsListBoxImg from './images/news-list.jpg';

const Section4 = ({
  text,
  title,
  classes,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.left}>
      <Image
        src={clothesBoxImg}
        offsetYMin={-50}
        offsetYMax={50}
      />
    </div>
    <div className={classes.right}>
      <Parallax offsetYMin={-70} offsetYMax={70}>
        <div>
          <Content
            title={title}
            text={text}
            underline={false}
            size="1.5em"
            textColumnWidth="50%"
          />

          <Image
            src={newsListBoxImg}
          />
        </div>
      </Parallax>
    </div>
  </div>
);

Section4.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.object,
};

Section4.defaultProps = {
  text: '',
  title: '',
  classes: {},
};

export default injectSheet(styles)(Section4);
