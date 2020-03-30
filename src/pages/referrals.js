import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from "gatsby";
import Post from "../components/post";
import Layout from '../components/layout';
// import LandingPageMenu from "../components/landingpagemenu"

const ReferralMarketingLandingPage = () => {
    return ( <StaticQuery query = { ReferralMarketingQuery }
        render = {
            data => {
                return ( 
                    <Layout >
                        <Post title = { data.markdownRemark.frontmatter.title }
                        description = { data.markdownRemark.frontmatter.description }
                        keywords = { data.markdownRemark.frontmatter.keywords }
                        excerptData = { data.markdownRemark.htmlAst }
                        />  
                    </Layout>
                )
            }
        }
        />  
    )
}


const ReferralMarketingQuery = graphql `
query ReferralMarketingQuery{
    markdownRemark(frontmatter:{path:{eq:"/referrals"}}){
        htmlAst
            frontmatter{
                description
                keywords
                title
            }
        }
    }
`
export default ReferralMarketingLandingPage