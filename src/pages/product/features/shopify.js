import React from 'react'
import {Link,StaticQuery} from 'gatsby'
import Layout from '../../../components/layout'
import Post from '../../../components/post'
import SEO from '../../../components/seo';


const FeaturesPage = () => (
    <Layout>
        <StaticQuery
            query={ShopifyIntegrationQuery}
            render={data => {
            return (
                <Post
                    title={data.markdownRemark.frontmatter.title}
                    description={data.markdownRemark.frontmatter.description}
                    keywords={data.markdownRemark.frontmatter.keywords}
                    excerptData={data.markdownRemark.htmlAst}
                />
            )
            }}
        />         
    </Layout>
)

const ShopifyIntegrationQuery = graphql`
 query ShopifyIntegrationQuery{
  markdownRemark(frontmatter: {path: {eq: "/shopify-integration"}}){
    htmlAst
    frontmatter{
        title
        description
        path
        keywords
    }
  }
} 
`

export default FeaturesPage