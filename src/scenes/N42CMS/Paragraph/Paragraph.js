import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Paragraph.styles';

const Paragraph = ({
  text,
  classes,
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
  classes: PropTypes.object,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  text: '',
  classes: {},
  className: '',
};

export default injectSheet(styles)(Paragraph);
