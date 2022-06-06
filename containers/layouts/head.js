import React, { useEffect, useState } from "react";
import Head from "next/head";
import { METADATA, SITE_URLS } from "../../config";

const MainHead = ({
  title,
  keywords = METADATA?.keywords,
  description = METADATA?.description,
  robots = "index, follow",
}) => {
  const [contentRobots, setContentRobots] = useState(robots);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!SITE_URLS.includes(window.location.origin))
        setContentRobots("noindex, nofollow");
    }
  }, []);

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="Googlebot" content={contentRobots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      <meta name="theme-color" content="#262626" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <title>{title}</title>
    </Head>
  );
};

export default MainHead;
