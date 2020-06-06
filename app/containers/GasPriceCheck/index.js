import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';

export default function GasPriceCheck() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>

      <H1>this is gas price check</H1>
    </div>
  );
}
