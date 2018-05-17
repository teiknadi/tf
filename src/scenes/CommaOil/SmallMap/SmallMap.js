import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './SmallMap.styles';

const SmallMap = ({
  classes,
}) => (
  <div className={classes.wrapper} />
);

SmallMap.propTypes = {
  classes: PropTypes.object,
};

SmallMap.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(SmallMap);
