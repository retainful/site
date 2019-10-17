import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo';
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'

var h3center ={
    h3: {
        textAlign: "center"
      },
}

const AboutUs = () => {
  return (
    <Layout>
      <StaticQuery
      query={AboutUsQuery}
      render={data => {
        return (
          <div className="legal-info" style={h3center}>
              <Post
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
                keywords={data.markdownRemark.frontmatter.keywords}
                excerptData={data.markdownRemark.htmlAst}
              />
          </div>
      )
    }}
    />       
  </Layout>
    )
  }
const AboutUsQuery = graphql`
 query AboutUsQuery{
  markdownRemark(frontmatter: {path: {eq: "/about-us"}}){
    htmlAst
    frontmatter{
      title
      description
      keywords
      path
    }
  }
} 
`
export default AboutUs