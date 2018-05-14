import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';

import I18nContext from '../Context';

class I18nProvider extends Component {
  constructor(props) {
    super(props);

    const polyglot = new Polyglot({ locale: 'en', phrases: this.props.phrases });
    const translate = polyglot.t.bind(polyglot);

    this.state = {
      translate,
    };
  }

  render() {
    return (
      <I18nContext.Provider value={this.state.translate}>
        {this.props.children}
      </I18nContext.Provider>
    );
  }
}

I18nProvider.propTypes = {
  phrases: PropTypes.object,
  children: PropTypes.element.isRequired,
};

I18nProvider.defaultProps = {
  phrases: {},
};

export default I18nProvider;
