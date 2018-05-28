import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { Parallax } from 'react-scroll-parallax';
import Content from '../../../components/Content';
import Image from '../../../components/Image';
import styles from './Section2.styles';

import textEditorUrl from './images/text-editor.jpg';
import photoEditorUrl from './images/photo-editor.jpg';

const Section2 = ({
  text,
  title,
  classes,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.leftColumn}>
      <Image
        src={textEditorUrl}
        className={classes.textEditor}
        offsetYMin={-20}
        offsetYMax={0}
      />
    </div>

    <div className={classes.rightColumn}>
      <Parallax
        offsetYMin={-40}
        offsetYMax={20}
      >
        <Content
          text={text}
          title={title}
          size="1.5em"
          underline={false}
          textColumnWidth="50%"
        />
        <Image
          src={photoEditorUrl}
        />
      </Parallax>
    </div>
  </div>
);

Section2.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.object,
};

Section2.defaultProps = {
  text: '',
  title: '',
  classes: {},
};

export default injectSheet(styles)(Section2);
