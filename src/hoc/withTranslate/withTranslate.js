import React from 'react';
import I18nContext from '../../i18n/Context';

const withTranslate = (WrappedComponent) => {
  const TranslatedComponent = props => (
    <I18nContext.Consumer>
      {translate => (
        <WrappedComponent
          {...props}
          t={translate}
        />
      )}
    </I18nContext.Consumer>
  );

  return TranslatedComponent;

};

export default withTranslate;
