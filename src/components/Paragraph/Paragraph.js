import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Paragraph.styles';

const Paragraph = ({
  text,
  classes,
  hasCross, // eslint-disable-line no-unused-vars
  className,
}) => (
  <p
    className={[classes.text, className].join(' ')}
  >
    {text}
  </p>
);

Paragraph.propTypes = {
  text: PropTypes.string,
  hasCross: PropTypes.bool,
  classes: PropTypes.object,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  text: '',
  classes: {},
  className: '',
  hasCross: false,
};

export default injectSheet(styles)(Paragraph);
