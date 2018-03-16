import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Title.styles';

const Title = ({ classes, body }) => (
  <h1 className={classes.content}>{body.split('\n').map((item, key) => {
    return <Fragment key={key}>{item}<br/></Fragment>
  })}</h1>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired
};

export default injectSheet(styles)(Title);
