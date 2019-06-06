import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo';
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'


const TermsOfService = () => {
    return (
        <Layout>
  <StaticQuery
      query={TocQuery}
      render={data => {
      return (
        <Container type="s">
        <div className="legal-info">
          <Post
            excerptData={data.markdownRemark.htmlAst}
            />
            {console.log(data.markdownRemark.htmlAst)}
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
  markdownRemark(frontmatter: {path: {eq: "/terms-of-service"}}){
    html
    htmlAst
    frontmatter{
      title
      path
    }
  }
} 
`
export default TermsOfService