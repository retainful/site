import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import StandardPricingTable from '../components/StandardPricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import PageContent from "../components/pageContent";
import Container from "../components/container";

const StandardPricingPage = () =>{
    return(
        <Layout>
        <MetaTags
            title="Pricing Plans | Retainful"
            description="Start recovering abandoned carts in your Shopify and WooCommerce stores. Get started for FREE!"
            keywords="retainful pricing plans, abandoned cart recovery, cart abandonment, shopify abandoned checkouts, woocommerce abandoned cart recovery"
        />
        <div className="pricing-banner-container">
            <div className="intro-text-container">
                <div className="container container-s text-center">
                    <h2>Recover your lost sales and boost your revenue by 10x.</h2>
                    <h4>Join 1000+ store owners who get more revenue with Retainful.</h4>
                    <p>
                    <a className="btn-action btn-lg" href="https://app.retainful.com/" target="_blank" rel="noopener noreferrer">Get started for FREE</a>
                    </p>
                    <p>Simple, honest prices. No surprises! No annual contracts</p>
                </div>
            </div>
            <Container>
                <div id="pricing" className="pricing-section text-center pricing-plans-bg">
                    <StandardPricingTable/>
                </div>
            </Container>
            <HomeTrutedCompanies/>
            <FeaturedReviews/>

            <div className="faq-block">
                <StaticQuery
                    query={StandardPricingFaqPageQuery}
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
            <GetStarted/>
        </div>
    </Layout>
    )
}

export default StandardPricingPage

export const StandardPricingFaqPageQuery = graphql`
 query StandardPricingFaqPageQuery{
      markdownRemark(frontmatter: {path: {eq: "/pricing-faq"}}){
        htmlAst
        frontmatter{
          path
        }
      }
  } 
`