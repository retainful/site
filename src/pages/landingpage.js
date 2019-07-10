import React, { Component } from 'react';
import {Link,StaticQuery,graphql} from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
import Container from "../components/container"

const LandingPage = () => {
    return(
      <Container>
        <StaticQuery 
            query = {HomePageHeaderQuery}
            render = {data => {
                return (
                  <Container type="s">
                  <div className="legal-info">
                    <Post
                      excerptData={data.markdownRemark.htmlAst}
                      />
                    </div>
                    </Container>
                )
            }}
        />
        </Container>  
    )            
}


const HomePageHeaderQuery = graphql`
query HomePageHeaderQuery{
  markdownRemark(frontmatter:{path:{eq:"/homebanner"}}){
    htmlAst
    frontmatter{
      title
    }
  }
}
`

const HomePageFeatureQuery = graphql`
query HomePageFeatureQuery{
  markdownRemark(frontmatter:{path:{eq:"/homefeature"}}){
    htmlAst
    frontmatter{
      title
    }
  }
}
`
export default LandingPage