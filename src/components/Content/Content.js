import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import ColumnText from '../ColumnText';
import Heading from '../Heading';
import styles from './Content.styles';

const Content = ({
  text,
  title,
  size,
  classes,
  underline,
  className,
  offsetLeft,
  textColumnWidth,
}) => (
  <div className={[classes.wrapper, className].join(' ')}>
    <Heading
      size={size}
      text={title}
      className={classes.title}
      underline={underline}
    />
    <ColumnText
      className={classes.text}
      text={text}
      offsetLeft={offsetLeft}
      width={textColumnWidth}
    />
  </div>
);

Content.propTypes = {
  size: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  underline: PropTypes.bool,
  offsetLeft: PropTypes.number,
  textColumnWidth: PropTypes.string,
};

Content.defaultProps = {
  text: '',
  title: '',
  classes: {},
  className: '',
  size: '2.375em',
  underline: true,
  offsetLeft: 0,
  textColumnWidth: '20%',
};

export default injectSheet(styles)(Content);
