import React, { Component, Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import StandardPricingTable from '../components/StandardPricing'
import GetStarted from '../components/getstarted'
import FeaturedReviews from '../components/featuredreviews'
import $ from 'jquery'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap'

import HomeTrutedCompanies from '../constants/HomePage/homeTrustedCompanies'
import PageContent from '../components/pageContent'
import Container from '../components/container'
import { Row, Col } from 'reactstrap'
import Plan from '../components/Plan'
import FeatherIcon from 'feather-icons-react'

// import ToggleBtn from '../components/togglebutton'

class StandardPricingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starterPrice: {
        anual: '7',
        month: '9'
      },
      growthPrice: {
        anual: '23',
        month: '29'
      },
      professionalPrice: {
        anual: '79',
        month: '99'
      },
      billAnually: false,
      toggle: true,
      sliderRange: '2000',
      sliderValue: '',
    }
  }

  componentDidMount() {
    this.toggle()
    this.calculatePrice()
  }
  toggle = () => {
    console.log(this.state.billAnually);
    
    this.setState({ billAnually: !this.state.billAnually })
  }

  handleSliderChange = e => {
    this.setState(
      {
        sliderRange: e.target.value,
      },
      () => {
        this.calculatePrice()
      }
    )
  }
  calculatePrice = () => {
    let contacts = this.state.sliderRange
    if (contacts <= 2000) {

      this.setState({
        starterPrice: {
          anual: '7',
          month: '9'
        },
        growthPrice: {
          anual: '23',
          month: '29'
        },
        professionalPrice: {
          anual: '79',
          month: '99'
        }
      })

      // ReactDOM.render(<Fragment>7</Fragment>, document.getElementById('starter-pricey'));
      // ReactDOM.render(<Fragment>9</Fragment>, document.getElementById('starter-pricem'));
      // ReactDOM.render(<Fragment>23</Fragment>, document.getElementById('growth-pricey'));
      // ReactDOM.render(<Fragment>29</Fragment>, document.getElementById('growth-pricem'));
    }
    if (contacts <= 5000) {
      // ReactDOM.render(<Fragment>23</Fragment>, document.getElementById('growth-pricey'));
      // ReactDOM.render(<Fragment>29</Fragment>, document.getElementById('growth-pricem'));
      this.setState({
        growthPrice: {
          anual: '23',
          month: '29'
        },
        professionalPrice: {
          anual: '79',
          month: '99'
        }
      })
    }
    if (contacts > 5000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier-5) * 5;
      // let originalPrice = priceValue + 23;
      // let originalPricem = priceValue + 29;
      // ReactDOM.render(<Fragment>{originalPrice}</Fragment>, document.getElementById('growth-pricey'));
      // ReactDOM.render(<Fragment>{originalPricem}</Fragment>, document.getElementById('growth-pricem'));
      this.setState({
        growthPrice: {
          anual: priceValue + 23,
          month: priceValue + 29
        },
        professionalPrice: {
          anual: priceValue + 79,
          month: priceValue + 99
        }
      })
    }
    if (contacts > 2000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier-2) * 5;
      // let originalPrice = priceValue + 7;
      // let originalPricem = priceValue + 9;
      // ReactDOM.render(<Fragment>{originalPrice}</Fragment>, document.getElementById('starter-pricey'));
      // ReactDOM.render(<Fragment>{originalPricem}</Fragment>, document.getElementById('starter-pricem'));
      this.setState({
        starterPrice: {
          anual: priceValue + 7,
          month: priceValue + 9
        }
      })
    }
  }

  render() {
    return (
      <div className="pricing-banner-container">
        {/* <StandardPricingTable /> */}
        <Row>
          <Col
            md="4"
            className="pr-0"
          >
            <Row>
              <Col md="10">
              <div className="toggle-btn">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="card text-center">
                      <div className="card-body align-items-center">
                        <div style={{flex: "auto"}}>
                          <h4>How many contacts do you have?</h4>
                          <h2 className="mt-1 mb-3">
                            {this.state.sliderRange} <small>Contacts</small>
                          </h2>
                          <FormGroup>
                            <CustomInput
                              type="range"
                              id="sliderRange"
                              min="2000"
                              max="25000"
                              step="1000"
                              value={this.state.sliderRange}
                              name="sliderRange"
                              onChange={this.handleSliderChange}
                              title={this.state.sliderRange}
                            />
                          </FormGroup>
                        </div>
                        <div style={{flex: "0 1 30%"}}>
                          <p className="mt-3 mb-2">Pay anually to <span style={{ color: '#3abd82', fontWeight: '600' }}>
                                Save 20%
                              </span></p>
                        <div className="d-inline-block clearfix">
                          <button
                            type="button"
                            onClick={this.toggle}
                            id="pricing-toggle"
                            className="btn btn-lg btn-toggle-secondary btn-toggle"
                            data-toggle="button"
                            aria-pressed="false"
                            autoComplete="off"
                              >
                                <strong className={this.state.billAnually ? 'active' : ''}>
                              Anually
                                </strong>
                                <strong className={!this.state.billAnually ? 'active' : ''}>Monthly</strong>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div id="pricing-toggle">
                  {/* <ToggleBtn /> */}
                </div>
              </Col>
              <Col
                md="2"
                className="p-0 d-flex align-items-center justify-content-center"
              >
                <FeatherIcon icon="chevrons-right" size="40" color="#aaaaaa" />
              </Col>
            </Row>
          </Col>
          <Col
            md="8"
            className="pr-0  d-flex align-items-center justify-content-center"
          >
            <div
              id="pricing"
              className="pricing-section text-center pricing-plans-bg"
            >
              <Row>
                <Plan size="3" className="plan-bdr-right plan-bdr-bg">
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
                        <a href="/premium-addons">
                          Premium Add-ons (WooCommerce)
                        </a>
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
                <Plan size="3" className="plan-bdr-bg">
                  <div slot="plan-title">Starter</div>
  
                  <div slot="original-price-line">normally $29/month</div>
  
                  <div slot="plan-price">
                    <sup>$</sup>
                    {this.state.billAnually ?
                      <span>{this.state.starterPrice.anual}</span>
                      :
                      <span>{this.state.starterPrice.month}</span>
                    }
                    <sub>/month</sub>
  
                    {this.state.billAnually &&
                      <p className="pt-3">(Billed Anually)</p>
                    }
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
                        <strong>+ $5 per 1000 additional contacts</strong>
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
                        <a href="/premium-addons">
                          Premium Add-ons (WooCommerce)
                        </a>
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
                <Plan size="3" className="plan-bdr-bg featured">
                  <div slot="plan-title">Growth</div>
  
                  <div slot="original-price-line">normally $59/month</div>
  
                  <div slot="plan-price">
                    <sup>$</sup>
                    {this.state.billAnually ?
                      <span>{this.state.growthPrice.anual}</span>
                      :
                      <span>{this.state.growthPrice.month}</span>
                    }
                    <sub>/month</sub>
  
                    {this.state.billAnually &&
                      <p className="pt-3">(Billed Anually)</p>
                    }
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
                        <strong>+ $5 per 1000 additional contacts</strong>
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
                        <a href="/premium-addons">
                          Premium Add-ons (WooCommerce)
                        </a>
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
                <Plan size="3" className="plan-bdr-bg">
                  <div slot="plan-title">Professional</div>
  
                  <div slot="original-price-line">normally $199/month</div>
  
                  <div slot="plan-price">
                    <sup>$</sup>
                    {this.state.billAnually ?
                      <span>{this.state.professionalPrice.anual}</span>
                      :
                      <span>{this.state.professionalPrice.month}</span>
                    }
                    <sub>/month</sub>
  
                    {this.state.billAnually &&
                      <p className="pt-3">(Billed Anually)</p>
                    }
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
                        <strong>+ $5 per 1000 additional contacts</strong>
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
                        <a href="/premium-addons">
                          Premium Add-ons (WooCommerce)
                        </a>
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
          </Col>
        </Row>
  
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
