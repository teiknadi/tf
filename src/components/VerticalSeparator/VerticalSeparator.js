import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './VerticalSeparator.styles';

const VerticalSeparator = ({
  color, // eslint-disable-line no-unused-vars
  classes,
  position, // eslint-disable-line no-unused-vars
}) => (
  <div className={classes.wrapper}>
    <span className={classes.separator}/>
  </div>
);

VerticalSeparator.propTypes = {
  classes: PropTypes.object,
  position: PropTypes.oneOf([
    'left', 'middle', 'right'
  ]),
  color: PropTypes.string,
};

VerticalSeparator.defaultProps = {
  classes: {},
  position: 'right',
  color: '#949494'
};

export default injectSheet(styles)(VerticalSeparator);
