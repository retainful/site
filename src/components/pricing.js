import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import StandardPricingTable from '../components/StandardPricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies'
import PageContent from '../components/pageContent'
import Container from '../components/container'
import { Row, Col } from 'reactstrap'
import Plan from '../components/Plan'
import FeatherIcon from 'feather-icons-react'

import ToggleBtn from '../components/togglebutton'

const StandardPricingPage = () => {
  return (
    <div className="pricing-banner-container">
      <div
        id="pricing"
        className="pricing-section text-center pricing-plans-bg"
      >
        <StandardPricingTable />
        <Row>
          <Col md="3" className="p-0">
            <div id="pricing-toggle">
              <ToggleBtn />
            </div>
          </Col>
          <Col md="1" className="p-0 align-items-center justify-content-center">
            <FeatherIcon icon="chevrons-right" size="30" color="#aaaaaa" />
          </Col>

          <Plan size="2" className="plan-bdr-right plan-bdr-bg">
            <div slot="plan-title">Free</div>

            <div slot="original-price-line">
              <br />
            </div>

            <div slot="plan-price">
              <sup>$</sup>0
            </div>

            <div slot="original-price-line-anually">
              <br />
            </div>

            <div slot="plan-price-anually">
              <sup>$</sup>0<p className="pt-3">(Billed Anually)</p>
            </div>

            <div slot="plan-button">
              <a
                className="btn-outline btn-lg"
                href="https://app.retainful.com/?utm_source=free&utm_medium=try_it_for_free&utm_campaign=pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Try It Free{' '}
              </a>
            </div>

            <div slot="pricing-slogan">
              Free forever. No credit card required.
            </div>

            <div slot="plan-features">
              <ul>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Upto 300 contacts
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  <a href="/premium-addons">Premium Add-ons (WooCommerce)</a>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Standard Support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Live chat support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Dedicated Onboard Specialist
                </li>
              </ul>
            </div>
          </Plan>
          <Plan size="2" className="plan-bdr-bg">
            <div slot="plan-title">Starter</div>

            <div slot="original-price-line">normally $29/month</div>

            <div slot="plan-price">
              <sup>$</sup>
              <span id="starter-pricem">9</span>
              <sub>/month</sub>
            </div>

            <div slot="original-price-line-anually">normally $29/month</div>

            <div slot="plan-price-anually">
              <sup>$</sup>
              <span id="starter-pricey">7</span>
              <sub>/month</sub>

              <p className="pt-3">(Billed Anually)</p>
            </div>

            <div slot="plan-button">
              <a
                className="btn-action btn-lg"
                href="https://app.retainful.com/?utm_source=starter&utm_medium=start_free_trail&utm_campaign=pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial{' '}
              </a>
            </div>

            <div slot="pricing-slogan">
              Everything you need to drive more results.
            </div>

            <div slot="plan-features">
              <ul>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Upto 2000 contacts <br />
                  <strong>+ $9 per 1000 additional contacts</strong>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Unlimited Email Sending
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  <a href="/premium-addons">Premium Add-ons (WooCommerce)</a>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Follow-ups for Next Order Coupons
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Priority Email Support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Live chat support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Dedicated Onboard Specialist
                </li>
              </ul>
            </div>
          </Plan>
          <Plan size="2" className="plan-bdr-bg featured">
            <div slot="plan-title">Growth</div>

            <div slot="original-price-line">normally $59/month</div>

            <div slot="plan-price">
              <sup>$</sup>
              <span id="growth-pricem">29</span>
              <sub>/month</sub>
            </div>

            <div slot="original-price-line-anually">normally $59/month</div>

            <div slot="plan-price-anually">
              <sup>$</sup>
              <span id="growth-pricey">23</span>
              <sub>/month</sub>

              <p className="pt-3">(Billed Anually)</p>
            </div>

            <div slot="pricing-slogan">
              Great for growing businesses who want to do more.
            </div>

            <div slot="plan-button">
              <a
                className="btn-action btn-lg"
                href="https://app.retainful.com/?utm_source=growth&utm_medium=start_free_trail&utm_campaign=pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial{' '}
              </a>
            </div>

            <div slot="plan-features">
              <ul className="pricing-details_list">
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Upto 5000 Contacts
                  <br />
                  <strong>+ $9 per 1000 additional contacts</strong>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Unlimited Email Sending
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  <a href="/premium-addons">Premium Add-ons (WooCommerce)</a>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Follow-ups for Next Order Coupons
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Priority Email Support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Email from your own domain
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Live chat support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="x"
                    color="#e84836"
                    size="16"
                  />
                  Dedicated Onboard Specialist
                </li>
              </ul>
            </div>
          </Plan>
          <Plan size="2" className="plan-bdr-bg">
            <div slot="plan-title">Professional</div>

            <div slot="original-price-line">normally $199/month</div>

            <div slot="plan-price">
              <sup>$</sup>99<sub>/month</sub>
            </div>

            <div slot="original-price-line-anually">normally $199/month</div>

            <div slot="plan-price-anually">
              <sup>$</sup>79<sub>/month</sub>
              <p className="pt-3">(Billed Anually)</p>
            </div>

            <div slot="plan-button">
              <a
                className="btn-action btn-lg"
                href="https://app.retainful.com/?utm_source=professional&utm_medium=start_free_trail&utm_campaign=pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial{' '}
              </a>
            </div>

            <div slot="pricing-slogan">
              All the tools necessary to increase your conversions.
            </div>

            <div slot="plan-features">
              <ul>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Upto 25000 Contacts <br />
                  <strong>+ $9 per 1000 additional contacts</strong>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Unlimited Email Sending
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  <a href="/premium-addons">Premium Add-ons (WooCommerce)</a>
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Follow-ups for Next Order Coupons
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Priority Email Support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Email from your own domain
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Live chat support
                </li>
                <li>
                  <FeatherIcon
                    className="mr-2"
                    icon="check"
                    color="#1eab36"
                    size="16"
                  />
                  Dedicated Onboard Specialist
                </li>
              </ul>
            </div>
          </Plan>
        </Row>
      </div>
      {/*<div className="faq-block">
                <StaticQuery
                    query={StandardPricingpageFaqQuery}
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
                </div>*/}
    </div>
  )
}

export default StandardPricingPage

export const StandardPricingpageFaqQuery = graphql`
  query StandardPricingpageFaqQuery {
    markdownRemark(frontmatter: { path: { eq: "/pricing-faq" } }) {
      htmlAst
      frontmatter {
        path
      }
    }
  }
`
