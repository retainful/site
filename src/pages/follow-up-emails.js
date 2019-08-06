import React, { Component } from 'react';
import {Link,StaticQuery,graphql} from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
import LandingPageMenu from "../components/landingpagemenu"

const LandingPage = () => {
    return(
        <StaticQuery 
            query = {FollowupEmailQuery}
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


const FollowupEmailQuery = graphql`
query FollowupEmailQuery{
  markdownRemark(frontmatter:{path:{eq:"/follow-up-emails"}}){
    htmlAst
    frontmatter{
      description
      keywords
      title
    }
  }
}
`
export default LandingPage