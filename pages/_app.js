import '../styles/globals.css'Add commentMore actions
import { Fragment } from 'react'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <Analytics />
        </Fragment>
    )Add commentMore actions
}

export default MyApp
