import React from 'react';
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
  }) => {
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'product',
        url,
        name: title,
        alternateName: title,
      },
    ];
  
    return isBlogPost
      ? [
          ...schemaOrgJSONLD,
          {
            '@context': 'https://www.retainful.com',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            '@context': 'https://retainful.com',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: title,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            description,
            author: {
              '@type': 'Product',
              name: 'retainful',
            },
            publisher: {
              '@type': 'Organisation',
              url: 'https://retainful.com',
            },
            mainEntityOfPage: {
              '@type': 'Product',
              '@id': 'retainful',
            },
            datePublished,
          },
        ]
      : schemaOrgJSONLD;
  };

  const Metatags  =(props) => {

  const title =  props.title;
  const description = props.description;
  const image = props.thumbnail;
  const pathname = props.pathname;
  const url = props.url;
  const datePublished = props.date;
  const isBlogPost=props.isBlogPost;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    title,
    image,
    description,
    datePublished,
    isBlogPost
  });
  
  return (
    <Helmet>
      {/* General tags */}
      <meta name="robots" content="index, follow" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url+pathname} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null} 
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@retainful" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:domain" content="retainful.com" />
    </Helmet>
  );
};

export default Metatags;