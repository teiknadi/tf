import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './Line.styles';

const Line = ({
  width, // eslint-disable-line
  color, // eslint-disable-line
  classes,
  position, // eslint-disable-line
  top, // eslint-disable-line
}) => (
  <div className={classes.bar} />
);

Line.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.object,
  position: PropTypes.oneOf([
    'left', 'right'
  ]),
};

Line.defaultProps = {
  classes: {},
  width: '20%',
  color: '#fff',
  position: 'left',
};

export default injectSheet(styles)(Line);
