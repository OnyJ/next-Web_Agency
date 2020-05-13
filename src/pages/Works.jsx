import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

const Works = () => {
  return (
    <>
      <h3>
        <FormattedMessage id="works.title" />
      </h3>
      <p>
        <FormattedMessage id="works.text" />
      </p>
    </>
  );
};

export default injectIntl(Works);
