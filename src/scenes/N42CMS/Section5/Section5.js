import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import styles from './Section5.styles';

import rightColImage from './images/news-small-box.jpg';
import leftColTopImage from './images/image-top.jpg';
import leftColBottomImage from './images/image-bottom.jpg';

const Section5 = ({
  text,
  title,
  classes,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.left}>
      <Parallax
        offsetYMin={-300}
        offsetYMax={100}
      >
        <div>
          <Content
            title={title}
            text={text}
            underline={false}
            size="1.5em"
            textColumnWidth="100%"
          />

          <Image
            src={rightColImage}
          />
        </div>
      </Parallax>
    </div>

    <div className={classes.right}>
      <Parallax
        offsetYMin={-100}
        offsetYMax={20}
      >
        <Image
          src={leftColTopImage}
          imageClassName={classes.topImage}
        />

        <Image
          src={leftColBottomImage}
        />
      </Parallax>
    </div>
  </div>
);

Section5.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.object,
};

Section5.defaultProps = {
  text: '',
  title: '',
  classes: {},
};

export default injectSheet(styles)(Section5);
