import React from 'react';
import PropTypes from 'prop-types';

import Line from './Line';

const HorizontalLines = ({
  items,
}) => items.map((item, index) => (
  <Line {...item} key={index} />
));

HorizontalLines.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

HorizontalLines.defaultProps = {
  items: [],
};

export default HorizontalLines;
