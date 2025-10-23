import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'auto detailing Edmonton, car detailing, ceramic coating, paint correction, mobile detailing, interior detailing, exterior detailing',
  ogImage = 'https://www.autodetailgeeks.ca/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonical,
  noindex = false,
  structuredData
}) => {
  const fullTitle = title.includes('AutoDetailGeeks') ? title : `${title} | AutoDetailGeeks`;
  const siteUrl = 'https://www.autodetailgeeks.ca';
  const currentUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="AutoDetailGeeks" />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@AutoDetailGeeks" />
      <meta name="twitter:site" content="@AutoDetailGeeks" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="CA-AB" />
      <meta name="geo.placename" content="Edmonton" />
      <meta name="geo.position" content="53.5461;-113.4938" />
      <meta name="ICBM" content="53.5461, -113.4938" />

      {/* Author & Publisher */}
      <meta name="author" content="AutoDetailGeeks" />
      <link rel="publisher" href="https://www.autodetailgeeks.ca" />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AutoDetailGeeks" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
