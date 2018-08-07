import React from 'react';
import { getDisplayName } from '../../helpers/components';
import I18nContext from '../../i18n/Context';

const withTranslate = (WrappedComponent) => {
  const WithTranslate = props => (
    <I18nContext.Consumer>
      {translate => (
        <WrappedComponent
          {...props}
          t={translate}
        />
      )}
    </I18nContext.Consumer>
  );

  WithTranslate.displayName = `WithTranslate(${getDisplayName(WrappedComponent)})`;

  return WithTranslate;

};

export default withTranslate;
