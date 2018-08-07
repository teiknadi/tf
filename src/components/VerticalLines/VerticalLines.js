import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { colors } from '../../styles/constants';
import Container from '../Container/Container';
import styles from './VerticalLines.styles';

const getStartLeftValue = (counter) => {
  switch (counter) {
    case 1:
      return 50;
    case 2:
      return 40;
    default:
      return 20;
  }
};

const VerticalLines = ({
  color, // eslint-disable-line no-unused-vars
  classes,
  counter,
  children,
  className,
}) => (
  <div className={className}>
    <div className={classes.lines}>
      <Container>
        {[...Array(counter).keys()].map(item => (
          <span
            key={item}
            className={classes.line}
            style={{ left: `${getStartLeftValue(counter) + (item * 20)}%` }}
          />
        ))}
      </Container>
    </div>
    <div className={classes.pageWrapper}>
      {children}
    </div>
  </div>
);

VerticalLines.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.object,
  counter: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
};

VerticalLines.defaultProps = {
  counter: 3,
  classes: {},
  className: '',
  color: colors.n42CmsLines,
};

export default injectSheet(styles)(VerticalLines);
