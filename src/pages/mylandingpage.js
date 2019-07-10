import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo';
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'

const MyLandingPage = () => {
  return (
    <StaticQuery
    query={MyLandingPageQuery}
    render={data => {
      return (
        <div className="my-landing-page">
          <Post
            title={data.markdownRemark.frontmatter.title}
            description={data.markdownRemark.frontmatter.description}
            excerptData={data.markdownRemark.htmlAst}
            />
          </div>
    )
  }}
  />   
    )
  }
const MyLandingPageQuery = graphql`
 query MyLandingPageQuery{
  markdownRemark(frontmatter: {path: {eq: "/my-landing-page"}}){
    htmlAst
    frontmatter{
      title
      description
      path
    }
  }
} 
`
export default MyLandingPage