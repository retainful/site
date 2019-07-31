import React from 'react';
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
    dateModified,
    keywords,
    authorName,
    sitename,
  }) => {
    const schemaOrgJSONLD = 
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: title,
      }
    return isBlogPost
      ? {
          ...schemaOrgJSONLD,
            mainEntityOfPage: {
              '@type': 'Website',
              '@id': sitename,
            },
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            datePublished,
            dateModified,
            keywords,
            author: {
              '@type': 'person',
               name: authorName,
            },
            publisher: {
              '@type': 'Organization',
              url: url,
              name:sitename,
              "logo":{
                "@type":"ImageObject",
                "url":'https://retainful.com/retainful-logo.png',
              },
            },
           
            description,
          }
      : schemaOrgJSONLD;
  };

  const Metatags  =(props) => {

  const title =  props.title;
  const description = props.description;
  const image = props.thumbnail;
  const pathname = props.pathname;
  const url = props.url;
  const datePublished = props.datePublished;
  const dateModified = props.datemodified;
  const isBlogPost=props.isBlogPost;
  const authorName = props.author;
  const sitename = props.sitename;
  const keywords = props.keywords;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    title,
    image,
    description,
    datePublished,
    dateModified,
    isBlogPost,
    authorName,
    sitename,
    keywords,
  });
  
  return (
    <Helmet title={title}>
      {/* General tags */}
      <meta name="robots" content="index, follow" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords ?<meta name= "keywords" content={keywords} /> : null }
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
