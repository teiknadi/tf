import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { colors } from '../../styles/constants';
import styles from './Heading.styles';

const Heading = ({
  text,
  classes,
  className,
}) => (
  <h2
    className={[
      classes.title,
      className
    ].join(' ')}
  >
    {text}
  </h2>
);

Heading.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  hasCross: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  classes: PropTypes.object,
  underline: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  className: PropTypes.string,
};

Heading.defaultProps = {
  text: '',
  classes: {},
  className: '',
  hasCross: false,
  size: '2.375em',
  underline: false,
  color: colors.black,
};

export default injectSheet(styles)(Heading);
