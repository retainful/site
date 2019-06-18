import React from 'react';
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
    authorName,
    sitename
  }) => {
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'Website',
        url,
        name: title,
        alternateName: title,
      },
    ];
  
    return isBlogPost
      ? [
          ...schemaOrgJSONLD,
          {
            '@context': url,
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
            '@context': url,
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
              '@type': 'person',
               name: authorName,
            },
            publisher: {
              '@type': 'Website',
              url: url,
              name:sitename,
            },
            mainEntityOfPage: {
              '@type': 'Website',
              '@id': sitename,
            },
            datePublished,
          },
        ]
      : schemaOrgJSONLD;
  };

  const Metatags  =(props) => {

    {console.log(props)}

  const title =  props.title;
  const description = props.description;
  const image = props.thumbnail;
  const pathname = props.pathname;
  const url = props.url;
  const datePublished = props.date;
  const isBlogPost=props.isBlogPost;
  const authorName =props.author
  const sitename = props.sitename

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    title,
    image,
    description,
    datePublished,
    isBlogPost,
    authorName,
    sitename
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