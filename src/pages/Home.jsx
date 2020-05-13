import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

const Home = ({ intl }) => {
  // const [title, setTitle] = useState(intl.formatMessage({ id: "home.title" }));

  return (
    <>
      <h3>
        <FormattedMessage id="home.title" />
      </h3>
      <p>
        <FormattedMessage id="home.text1" />
      </p>
      <p>
        <FormattedMessage id="home.text2" />
      </p>
    </>
  );
};

export default injectIntl(Home);
