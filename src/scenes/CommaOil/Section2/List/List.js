import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import Heading from '../../../../components/Heading';
import styles from './List.styles';

const List = ({
  title,
  classes
}) => (
  <div className={classes.wrapper}>
    <Heading
      text={title}
      className={classes.heading}
    />
    <ul className={classes.list}>
      <li>cindy clawerfield</li>
      <li>ciciando</li>
      <li>coma</li>
      <li>canto let mado</li>
      <li>c. many</li>
      <li>cloverfield</li>
      <li className="active">classius</li>
      <li>clesso misa</li>
      <li>clembox</li>
      <li>cland ++</li>
      <li>clarry miller</li>
      <li>clay</li>
    </ul>
  </div>
);

List.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object,
};

List.defaultProps = {
  title: '',
  classes: {},
};

export default injectSheet(styles)(List);
