import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import StandardPricingTable from '../components/pricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'
// import ToggleBtn from "../components/togglebutton"
import Highlight from "../components/highlight"
import Cta from "../components/cta"

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies'
import PageContent from '../components/pageContent'
import Container from '../components/container'

export default class PricingPage extends React.Component {

    render() {
        return (
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
              <span><h4>
                Grab Retainful at <Highlight>30% off</Highlight> this Black Friday Sale!
              </h4></span>
            </div>
          </div>
          <Container>
            <div id="pricing-toggle">
            {/*<ToggleBtn/>*/}
            </div>
            <StandardPricingTable />
          </Container>

          <HomeTrutedCompanies />

          <FeaturedReviews />

          <div className="faq-block">
            <StaticQuery
              query={PricingFaqQuery}
              render={data => {
                return (
                  <Container>
                    <PageContent excerptData={data.markdownRemark.htmlAst} />
                  </Container>
                )
              }}
            />
          </div>
          <div className="text-center p-3 pt-5">
            <h4>Recover More Carts and Start Growing Your Store's Revenue Now!</h4>
            <Cta url="#plans">Buy Retainful</Cta>
          </div>
        </div>
      </Layout>
    )
  }
}

export const PricingFaqQuery = graphql`
  query PricingFaqQuery {
    markdownRemark(frontmatter: { path: { eq: "/pricing-faq" } }) {
      htmlAst
      frontmatter {
        path
      }
    }
  }
`
