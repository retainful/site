import React, { Component } from 'react';
import {Link,StaticQuery,graphql} from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
import LandingPageMenu from "../components/landingpagemenu"

const LandingPage = () => {
    return(
        <StaticQuery 
            query = {BlackFridayQuery}
            render = {data => {
                return (
                  <>
                    <Layout>
                    <div className="BFCM-top"></div>
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


const BlackFridayQuery = graphql`
query BlackFridayQuery{
  markdownRemark(frontmatter:{path:{eq:"/black-friday-2019"}}){
    htmlAst
    frontmatter{
      keywords
      description
      title
    }
  }
}
`
export default LandingPage