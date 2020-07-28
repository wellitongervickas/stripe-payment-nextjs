import React from 'react';
import Head from 'next/head';

import '../assets/styles/app.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Stripe Store</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap" rel="stylesheet"></link>/
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
