import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


const CancelView: NextPage = () => {
  return (
    <>
      <Head>
        <title>Canceld</title>
      </Head>
      <div className="checkout-view">
        <div className="checkout-content">
          <h1>Product purchase has been canceled</h1>
        </div>
        <Link href="/">
          <a className="link-go-home">Go home</a>
        </Link>
      </div>
    </>
  );
}

export default CancelView;
