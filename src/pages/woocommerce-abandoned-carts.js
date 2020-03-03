import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
// import LandingPageMenu from "../components/landingpagemenu"

const WoocommerceAbandonedCartLandingPage = () => {
    return ( <
        StaticQuery query = { WoocommerceAbandonedCartQuery }
        render = {
            data => {
                return ( <
                    Layout >
                    <
                    Post title = { data.markdownRemark.frontmatter.title }
                    description = { data.markdownRemark.frontmatter.description }
                    keywords = { data.markdownRemark.frontmatter.keywords }
                    excerptData = { data.markdownRemark.htmlAst }
                    />  <
                    /Layout>
                )
            }
        }
        />  
    )
}


const WoocommerceAbandonedCartQuery = graphql `
query WoocommerceAbandonedCartQuery{
  markdownRemark(frontmatter:{path:{eq:"/woocommerce-abandoned-carts"}}){
    htmlAst
    frontmatter{
      description
      keywords
      title
    }
  }
}
`
export default WoocommerceAbandonedCartLandingPage