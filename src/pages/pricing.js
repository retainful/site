import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import StandardPricingTable from '../components/pricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies';
import PageContent from "../components/pageContent";
import Container from "../components/container";

class PricingPage extends React.Component {
    render() {
        return (
            <Layout>
                <MetaTags
                    title="Pricing Plans | Retainful"
                    description="Start recovering abandoned carts in your Shopify and WooCommerce stores. Get started for FREE!"
                    keywords="retainful pricing plans, abandoned cart recovery, cart abandonment, shopify abandoned checkouts, woocommerce abandoned cart recovery"
                />
                <div className="pricing-banner-container">                    
                <Container>
                       <StandardPricingTable/>
                    </Container>

                    <HomeTrutedCompanies/>

                    <FeaturedReviews/>

                    <div className="faq-block">
                        <StaticQuery
                            query={PricingFaqQuery}
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
}

export default PricingPage

export const PricingFaqQuery = graphql`
 query PricingFaqQuery{
      markdownRemark(frontmatter: {path: {eq: "/pricing-faq"}}){
        htmlAst
        frontmatter{
          path
        }
      }
  } 
`