import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Intro.styles';

const Intro = ({ classes, body }) => (
  <article className={classes.intro}>{body.split('\n').map((item, key) => {
    return <Fragment key={key}>{item}<br/></Fragment>
  })}</article>
);

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired
};

export default injectSheet(styles)(Intro);
