import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
  return (
    <Helmet defer={false}>
      <title>{title}</title>

      <meta name="description" content={description}/>
      <meta name="author" content="Miluckshan J. Vidyajayan" />
      <meta
        name="keywords"
        content="React Helmet, React, Miluckshan, Miluckshan J. Vidyajayan"
      />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="website" />
      <meta name="twitter:creator" content="miluckshan_j" />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
