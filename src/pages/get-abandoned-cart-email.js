import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/seo';
import SignupForm from '../components/SignupForm'
import Loading from '../components/Loading';
import notify from '../helpers/notify';
import axios from 'axios';
// import addToMailchimp from 'gatsby-plugin-mailchimp';

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import PageContent from "../components/pageContent";
import Container from "../components/container";

class SignUpPage extends React.Component{

    render() {
        return (
            <Layout>
                <SEO title="Our Customers | Retainful"
                     description="Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases"
                     keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`, `woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>
                <div className="newsletter-app">
                    <StaticQuery
                        query={SignUpPageQuery}
                        render={data => {
                            return (
                                <Container>
                                    <PageContent
                                        excerptData={data.markdownRemark.htmlAst}
                                    />
                                </Container>
                            )
                        }}
                    />
                </div>

                <HomeTrutedCompanies />
            </Layout>
        )
    }
}

export default SignUpPage;

export const SignUpPageQuery = graphql`
 query SignUpPageQuery{
      markdownRemark(frontmatter: {path: {eq: "/signup-form"}}){
        htmlAst
        frontmatter{
          path
        }
      }
  } 
`