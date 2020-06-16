import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import MetaTags from '../components/Metatags'
import StandardPricingTable from '../components/pricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'
import ToggleBtn from '../components/togglebutton'
import Highlight from '../components/highlight'
import Cta from '../components/cta'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies'
import PageContent from '../components/pageContent'
import Container from '../components/container'

import { Row, Col, Card, CardBody } from 'reactstrap'

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
              <h4>
                {' '}
                Join 1000+ store owners who get more revenue with Retainful.
              </h4>
              <Cta
                url="https://app.retainful.com/?utm_source=above_fold&utm_medium=get_start_for_free&utm_campaign=pricing"
                rel="noopener"
                target="_blank"
              >
                Get started for FREE
              </Cta>
              <p>Simple, honest prices. No surprises!</p>
            </div>
          </div>
          <Container>
            <StandardPricingTable />


            {/* <div id="pricing-toggle">
              <ToggleBtn />
            </div> */}

<div className="plan-features p-2 ptb-2 plan-price-title text-center">
        <h3>
          <strong>All Plans Include</strong>
        </h3>

        <Row className="text-left p-2 m-3">
          <Col md="6">
            <div className="pricing-plans-icons">
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/1.svg" />{' '}
                Capture & Recover Abandoned Carts{' '}
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/2.svg" />{' '}
                Unlimited Cart Recovery Emails
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/3.svg" />{' '}
                Drip / Sequential Email Reminders
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/4.svg" />{' '}
                Single-click Cart Recovery
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/5.svg" />{' '}
                Live Cart feed
              </p>
            </div>
          </Col>

          <Col md="6">
            <div className="pricing-plans-icons">
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/6.svg" />{' '}
                Unlimited Next Order Coupons
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/6.svg" />
                Follow-ups for Next Order Coupons{' '}
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/7.svg" />{' '}
                Ready to use, conversion-focussed templates
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/8.svg" />{' '}
                Visual drag and drop email editor
              </p>
              <p>
                {' '}
                <img src="https://raw.githubusercontent.com/retainful/site-images/f196e99d6a75db3cdf354f089eea1dee6f559d0e/pricing-plans-icons/9.svg" />{' '}
                Actionable Analytics and Insights
              </p>
            </div>
          </Col>
        </Row>
      </div>

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
