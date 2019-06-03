import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo';
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
//import Post from '../components/post'


const TermsOfService = () => {
    return (
        <Layout>
  <StaticQuery
      query={TocQuery}
      render={data => {
      return (
        <Container type="s">
        <div className="legal-info">
        {data.allMarkdownRemark.edges[0].node.excerpt}
        {console.log(data.allMarkdownRemark.edges[0].node.excerpt)}
          </div>
          </Container>
    )
  }}
  />         
  </Layout>
    )
  }
const TocQuery = graphql`
 query TocQuery{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/terms-of-service/"}}) {
    edges {
      node {
        frontmatter {
          title
          description
        }excerpt
      }
    }
  }
} 
`
export default TermsOfService