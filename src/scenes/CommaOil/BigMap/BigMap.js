import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import styles from './BigMap.styles';

import tooltipUrl from './images/nike-tooltip.png';

const BigMap = ({
  classes,
}) => (
  <div className={classes.wrapper}>
    <img
      src={tooltipUrl}
      alt="tooltip"
      className={classes.tooltip}
    />
  </div>
);

BigMap.propTypes = {
  classes: PropTypes.object,
};

BigMap.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(BigMap);
