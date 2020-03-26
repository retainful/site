import React, { Component } from 'react';
import {Link,StaticQuery,graphql} from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
import LandingPageMenu from "../components/landingpagemenu"

const LandingPage = () => {
    return(
        <StaticQuery 
            query = {NextOrderCouponQuery}
            render = {data => {
                return (
                  <>
                    <Layout className="landing-page-styles">
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


const NextOrderCouponQuery = graphql`
query NextOrderCouponQuery{
  markdownRemark(frontmatter:{path:{eq:"/next-order-coupon"}}){
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