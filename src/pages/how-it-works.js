import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo';
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'

const HowItWorks = () => {
  return (
    <Layout className="page-how-it-works">
    <StaticQuery
    query={HowItWorksQuery}
    render={data => {
      return (
      <Post
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
        excerptData={data.markdownRemark.htmlAst}
      />
    )
  }}
  />         
  </Layout>
    )
  }
const HowItWorksQuery = graphql`
 query HowItWorksQuery{
  markdownRemark(frontmatter: {path: {eq: "/how-it-works"}}){
    htmlAst
    frontmatter{
      title
      description
      path
    }
  }
} 
`
export default HowItWorks