import React, { Component } from 'react'
import { Input, FormGroup, Row, Col, Button } from 'reactstrap'
import FeatherIcon from 'feather-icons-react'

class StandardPricingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starterPrice: {
        anual: '7',
        month: '9',
      },
      growthPrice: {
        anual: '23',
        month: '29',
      },
      professionalPrice: {
        anual: '79',
        month: '99',
      },
      billAnually: false,
      toggle: true,
      sliderRange: '2000',
      sliderValue: '',
    }
  }

  componentDidMount() {
    this.toggle()
    this.calculatePrice(this.state.sliderRange)
  }
  toggle = () => {
    console.log(this.state.billAnually)

    this.setState({ billAnually: !this.state.billAnually })
  }

  handleSliderChange = e => {
    let value = e.target.value
    this.setState(
      {
        sliderRange: value,
      },
      () => {
        this.calculatePrice(this.state.sliderRange)
      }
    )
  }
  calculatePrice = contacts => {
    if (contacts <= 2000) {
      this.setState({
        starterPrice: {
          anual: '7',
          month: '9',
        },
        growthPrice: {
          anual: '23',
          month: '29',
        }
      })
    }
    if (contacts <= 5000) {
      this.setState({
        growthPrice: {
          anual: '23',
          month: '29',
        },
      })
    }
    if (contacts > 5000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier - 5) * 5
      this.setState({
        growthPrice: {
          anual: priceValue + 23,
          month: priceValue + 29,
        },
      })
    }
    if (contacts > 2000) {
      let priceMultiplier = contacts / 1000
      let priceValue = (priceMultiplier - 2) * 5
      this.setState({
        starterPrice: {
          anual: priceValue + 7,
          month: priceValue + 9,
        },
      })
    }
  }

  render() {
    return (
      <div className="pricing-banner-container">
        <Row>
        <Col md="12" className="py-3">
            <Row>
              <Col md="12" className="pb-3">
                <div className="toggle-btn">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="card text-center">
                        <div className="card-body align-items-center">
                          <div style={{ flex: 'auto' }}>
                            <h4>How many contacts do you have?</h4>
                            <h2 className="mt-1 mb-3">
                              {this.state.sliderRange} <small>Contacts</small>
                            </h2>
                            <FormGroup>
                              <Input
                                className="custom-range"
                                type="range"
                                id="sliderRange"
                                min="2000"
                                max="25000"
                                step="1000"
                                value={this.state.sliderRange}
                                name="sliderRange"
                                onChange={e => this.handleSliderChange(e)}
                                title={this.state.sliderRange}
                              />
                            </FormGroup>
                          </div>
                          <div style={{ flex: '0 1 30%' }}>
                            <p className="mt-3 mb-2">
                              Pay anually to{' '}
                              <span
                                style={{ color: '#3abd82', fontWeight: '600' }}
                              >
                                Save 20%
                              </span>
                            </p>
                            <div className="d-inline-block clearfix">
                              <Button
                                type="button"
                                onClick={this.toggle}
                                id="pricing-toggle"
                                className="btn-toggle-secondary btn-toggle"
                              >
                                <strong
                                  className={
                                    this.state.billAnually ? 'active' : ''
                                  }
                                >
                                  Anually
                                </strong>
                                <strong
                                  className={
                                    !this.state.billAnually ? 'active' : ''
                                  }
                                >
                                  Monthly
                                </strong>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                md="12"
                className="pt-1 d-flex align-items-center justify-content-center"
              >
                <FeatherIcon icon="chevrons-down" size="40" color="#aaaaaa" />
              </Col>
            </Row>
          </Col>
          <Col
            md="12"
            className="py-3  d-flex align-items-center justify-content-center"
          >
            <div
              id="pricing"
              className="pricing-section text-center pricing-plans-bg"
            >
              <div className="row">
                <div className="col-md-3 plan-bdr-right plan-bdr-bg">
                  <div className="plan-bdr-hr">
                    <div className="table-left table-left-rm wow fadeInDown">
                      <div className="pricing-details price-plan-list">
                        <h3 className="plan-title">
                          <div slot="plan-title">Free</div>
                        </h3>
                        <div>
                          <div className="original-price">
                            <div slot="original-price-line-anually">
                              <br />
                            </div>
                          </div>
                          <span className="price-amount">
                            <div slot="plan-price-anually">
                              <sup>$</sup>0
                              {this.state.billAnually && (
                                <p className="pt-3">(Billed Anually)</p>
                              )}
                            </div>
                            <span className="price-period"></span>
                          </span>
                        </div>
                        <div className="text-center">
                          <div slot="plan-button">
                            <a
                              className="btn-outline btn-lg"
                              href="https://app.retainful.com/?utm_source=free&amp;utm_medium=try_it_for_free&amp;utm_campaign=pricing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {' '}
                              Try It Free{' '}
                            </a>
                          </div>
                        </div>
                        <span className="price-slogan pt-3">
                          <div slot="pricing-slogan">
                            Free forever. No credit card required.
                          </div>
                        </span>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 plan-bdr-bg">
                  <div className="plan-bdr-hr">
                    <div className="table-left table-left-rm wow fadeInDown">
                      <div className="pricing-details price-plan-list">
                        <h3 className="plan-title">
                          <div slot="plan-title">Starter</div>
                        </h3>
                        <div>
                          <div className="original-price">
                            <div slot="original-price-line">
                              normally $29/month
                            </div>
                          </div>
                          <span className="price-amount">
                            <div slot="plan-price">
                              <sup>$</sup>
                              {this.state.billAnually ? (
                                <span>{this.state.starterPrice.anual}</span>
                              ) : (
                                <span>{this.state.starterPrice.month}</span>
                              )}
                              <sub>/month</sub>
                              {this.state.billAnually && (
                                <p className="pt-3">(Billed Anually)</p>
                              )}
                            </div>
                            <span className="price-period"></span>
                          </span>
                        </div>
                        <div className="text-center">
                          <div slot="plan-button">
                            <a
                              className="btn-action btn-lg"
                              href="https://app.retainful.com/?utm_source=starter&amp;utm_medium=start_free_trail&amp;utm_campaign=pricing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Start Free Trial{' '}
                            </a>
                          </div>
                        </div>
                        <span className="price-slogan pt-3">
                          <div slot="pricing-slogan">
                            Everything you need to drive more results.
                          </div>
                        </span>
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
                              Integrations - Mailchimp, ActiveCampaign, Hubspot, ConvertKit
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 plan-bdr-bg featured">
                  <div className="plan-bdr-hr">
                    <div className="table-left table-left-rm wow fadeInDown">
                      <div className="pricing-details price-plan-list">
                        <h3 className="plan-title">
                          <div slot="plan-title">Growth</div>
                        </h3>
                        <div>
                          <div className="original-price">
                            <div slot="original-price-line">
                              normally $59/month
                            </div>
                          </div>
                          <span className="price-amount">
                            <div slot="plan-price">
                              <sup>$</sup>
                              {this.state.billAnually ? (
                                <span>{this.state.growthPrice.anual}</span>
                              ) : (
                                <span>{this.state.growthPrice.month}</span>
                              )}
                              <sub>/month</sub>

                              {this.state.billAnually && (
                                <p className="pt-3">(Billed Anually)</p>
                              )}
                            </div>
                            <span className="price-period"></span>
                          </span>
                        </div>
                        <div className="text-center">
                          <div slot="plan-button">
                            <a
                              className="btn-action btn-lg"
                              href="https://app.retainful.com/?utm_source=growth&amp;utm_medium=start_free_trail&amp;utm_campaign=pricing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Start Free Trial{' '}
                            </a>
                          </div>
                        </div>
                        <span className="price-slogan pt-3">
                          <div slot="pricing-slogan">
                            Great for growing businesses who want to do more.
                          </div>
                        </span>
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
                              Integrations - Mailchimp, ActiveCampaign, Hubspot, ConvertKit
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
                                icon="x"
                                color="#e84836"
                                size="16"
                              />
                              Dedicated Onboard Specialist
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 plan-bdr-bg">
                  <div className="plan-bdr-hr">
                    <div className="table-left table-left-rm wow fadeInDown">
                      <div className="pricing-details price-plan-list">
                        <h3 className="plan-title">
                          <div slot="plan-title">Professional</div>
                        </h3>
                        <div>
                          <div className="original-price">
                            <div slot="original-price-line">
                              normally $199/month
                            </div>
                          </div>
                          <span className="price-amount">
                            <div slot="plan-price">
                              <sup>$</sup>
                              {this.state.billAnually ? (
                                <span>
                                  {this.state.professionalPrice.anual}
                                </span>
                              ) : (
                                <span>
                                  {this.state.professionalPrice.month}
                                </span>
                              )}
                              <sub>/month</sub>

                              {this.state.billAnually && (
                                <p className="pt-3">(Billed Anually)</p>
                              )}
                            </div>
                            <span className="price-period"></span>
                          </span>
                        </div>
                        <div className="text-center">
                          <div slot="plan-button">
                            <a
                              className="btn-action btn-lg"
                              href="https://app.retainful.com/?utm_source=professional&amp;utm_medium=start_free_trail&amp;utm_campaign=pricing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Start Free Trial{' '}
                            </a>
                          </div>
                        </div>
                        <span className="price-slogan pt-3">
                          <div slot="pricing-slogan">
                            All the tools necessary to increase your
                            conversions.
                          </div>
                        </span>
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
                              Integrations - Mailchimp, ActiveCampaign, Hubspot, ConvertKit
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
        </Row>
      </div>
    )
  }
}

export default StandardPricingPage
