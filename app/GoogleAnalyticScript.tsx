import React from 'react';
import Script from "next/script";

const GoogleAnalyticScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/" />
            <Script id="google_analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-E720JHXSJ1');`}
            </Script>
        </>
    )
}

export default GoogleAnalyticScript;
