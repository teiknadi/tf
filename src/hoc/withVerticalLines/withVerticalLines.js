import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { colors } from '../../styles/constants';
import styles from './withVerticalLines.styles';

import VerticalLines from '../../components/VerticalLines';

const withVerticalLines = (linesColor = colors.n42CmsLines) => (WrappedComponent) => {
  const Component = props => (
    <div>
      <VerticalLines
        counter={3}
        color={props.linesColor}
      />
      <div className={props.classes.pageContent}>
        <WrappedComponent {...props} />
      </div>
    </div>
  );

  Component.propTypes = {
    classes: PropTypes.object,
    linesColor: PropTypes.string,
  };

  Component.defaultProps = {
    classes: {},
    linesColor,
  };

  return injectSheet(styles)(Component);
};

export default withVerticalLines;
