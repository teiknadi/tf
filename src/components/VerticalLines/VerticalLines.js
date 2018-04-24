import React  from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { colors } from '../../styles/constants';
import Container from '../Container/Container';
import styles from './VerticalLines.styles';

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
            style={{ left: `${(item + 1) * 20}%` }}
          />
        ))}
      </Container>
    </div>
    <div className={classes.pageWrapper}>
      <Container>
        {children}
      </Container>
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
