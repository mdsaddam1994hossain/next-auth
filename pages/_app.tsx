import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

const MyApp =({ Component, pageProps })=> {
    return (
        <div>

        <Head>
        <title>Next auth </title>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </div>
    );
};

export default MyApp;