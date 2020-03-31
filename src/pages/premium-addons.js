import React, { Component } from 'react';
import {Link,StaticQuery,graphql} from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
import LandingPageMenu from "../components/landingpagemenu"

const PremiumAddonsLandingPage = () => {
    return(
        <StaticQuery 
            query = {PremiumAddonsQuery}
            render = {data => {
                return (
                  <>
                    <Layout>
                    <Post
                      title = {data.markdownRemark.frontmatter.title}
                      description = {data.markdownRemark.frontmatter.description}
                      keywords = {data.markdownRemark.frontmatter.keywords}
                      excerptData={data.markdownRemark.htmlAst}
                      />
                      </Layout>
                  </>
                )
            }}
        />  
    )            
}


const PremiumAddonsQuery = graphql`
query PremiumAddonsQuery{
  markdownRemark(frontmatter:{path:{eq:"/premium-addons"}}){
    htmlAst
    frontmatter{
      keywords
      description
      title
    }
  }
}
`
export default PremiumAddonsLandingPage