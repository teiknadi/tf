import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Description.styles';

const Description = ({ classes, body }) => (
  <p className={classes.content}>{body.split('\n').map((item, key) => {
    return <Fragment key={key}>{item}<br/></Fragment>
  })}</p>
);

Description.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired
};

export default injectSheet(styles)(Description);
