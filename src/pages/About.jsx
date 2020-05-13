import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

const About = () => {
  return (
    <>
      <h3>
        <FormattedMessage id="about.title" />
      </h3>
      <p>
        <FormattedMessage id="about.text1" />
      </p>
      <p>
        <FormattedMessage id="about.text2" />
      </p>
    </>
  );
};

export default injectIntl(About);
