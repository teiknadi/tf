import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import injectSheet from 'react-jss';

import styles from './ColumnText.styles';

const getText = text => (isString(text) ? [text] : text);

const ColumnText = ({
  text,
  color, // eslint-disable-line no-unused-vars
  width, // eslint-disable-line no-unused-vars
  classes,
  className,
}) => (
  <div className={[classes.wrapper, className].join(' ')}>
    {getText(text)
      .map((item, index) => (
        <p key={index} className={classes.columnItem}>{item}</p>
      ))}
  </div>
);

ColumnText.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  width: PropTypes.string,
};

ColumnText.defaultProps = {
  text: [],
  color: '',
  classes: {},
  className: '',
  width: '20%',
};

export default injectSheet(styles)(ColumnText);
