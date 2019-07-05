import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container';
import { StaticQuery } from 'gatsby';
import Post from '../components/post'

const PartnerProgram = () => {
  return (
    <Layout>
      <StaticQuery
      query={PartnerprogramQuery}
      render={data => {
        return (
          <Container>
            <div className="affiliate-programme">
              <Post
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
                excerptData={data.markdownRemark.htmlAst}
                />
            </div>
          </Container>
        )
      }}
      />
    </Layout>
  )
}
const PartnerprogramQuery = graphql`
 query PartnerprogramQuery{
  markdownRemark(frontmatter: {path: {eq: "/partner-program"}}){
    htmlAst
    frontmatter{
      title
      description
      path
    }
  }
} 
`
export default PartnerProgram