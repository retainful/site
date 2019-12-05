import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import StandardPricingTable from '../components/pricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'
import ToggleBtn from "../components/togglebutton"
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
              <h4> Join 1000+ store owners who get more revenue with Retainful.</h4>
              <Cta url="https://app.retainful.com/?utm_source=above_fold&utm_medium=get_start_for_free&utm_campaign=pricing" rel="noopener" target="_blank">Get started for FREE</Cta>
              <p>Simple, honest prices. No surprises! No annual contracts</p>
            </div>
          </div>
          <Container>
            <div id="pricing-toggle">
            <ToggleBtn/>
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
            <h4>Get Retainful at 30% Off & Increase Your Store’s Revenue!</h4>
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
