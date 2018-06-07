import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import { getDisplayName } from '../../helpers/components';
import { colors } from '../../styles/constants';
import styles from './withVerticalLines.styles';

import VerticalLines from '../../components/VerticalLines';

const withVerticalLines = (linesColor = colors.n42CmsLines) => (WrappedComponent) => {
  const WithVerticalLines = props => (
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

  WithVerticalLines.propTypes = {
    classes: PropTypes.object,
    linesColor: PropTypes.string,
  };

  WithVerticalLines.defaultProps = {
    classes: {},
    linesColor,
  };

  WithVerticalLines.displayName = `WithVerticalLines(${getDisplayName(WrappedComponent)})`;


  return injectSheet(styles)(WithVerticalLines);
};

export default withVerticalLines;
