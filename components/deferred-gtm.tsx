"use client";

import Script from "next/script";

export function DeferredGTM({ gtmId }: { gtmId: string }) {
  return (
    <>
      <Script
        id="gtm-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `,
        }}
      />
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
