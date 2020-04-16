import React from 'react'
import { Link, graphql } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { MdMenu } from 'react-icons/md'
import Layout from '../components/layout'
import Container from '../components/container'
import HOME_CARDS from '../constants/docsCards'
import CALLOUTS from '../constants/docsCallouts'
import SEO from '../components/seo'
import SideNav from '../components/SideNav'
import SideNavLinks from '../constants/docsSideNavLinks'

class DocsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props);
  }
  static renderCards() {
    return HOME_CARDS.map(card => (
      <div className="card card-home col-md-6 ta-center" key={card.TITLE}>
        <div className="card_inner">
          <span className="card_icon">{card.ICON}</span>
          <h3 className="card_title">{card.TITLE}</h3>
          {card.LINKS.map(link => (
            <Link key={link.TEXTNODE} to={link.URL} className="card_link">
              {link.TEXTNODE}
            </Link>
          ))}
        </div>
        <div className="card_button">
          <Link className="btn center" to={card.BUTTON_LINK}>
            View All
          </Link>
        </div>
      </div>
    ))
  }

  static renderCallouts() {
    return CALLOUTS.map(card => {
      const cardClass = `card home-callout callout--${card.BADGE}`
      return (
        <div className="col-md-6" key={card.TITLE}>
          <div className={cardClass}>
            <div className="image-block">
              <img src={card.IMAGE} alt="" />
            </div>
            <div className="text-block">
              <h3 className="card_title is-size-h2 m-bottom-2">{card.TITLE}</h3>
              <p className="is-p">{card.COPY}</p>
              <Link to={card.LINK} className="btn btn-primary center hidden-link">
                  Get Started
              </Link>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <Layout location={this.props.location} crumbLabel="Docs">
        <SEO
          title="Retainful Documentation"
          description="Learn how to recover abandoned carts in your WooCommerce and Shopify stores. Drive repeat purchases through next order coupons."
          keywords={[
            `Retainful documentation`,
            `retainful guide`,
            `woocommerce abandoned cart recovery`,
            `shopify abandoned cart recovery`,
            `shopify next order coupon`,
            `woocommerce next order coupon`,
          ]}
        />
        <div className="docs-container">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <button
                  id="showDocNavBtn"
                  className="visible-xs btn btn-primary"
                >
                  <MdMenu />
                </button>
                {/* <div className="aside-menu" id="docNavLinkContent">
                                    <SideNav navLinks={SideNavLinks} currentUrl={this.props.location.pathname}/>
                                </div> */}
              </div>
            </div>
          </div>
          <div className="docs-header">
            <Container>
              <h1 className="page-title">Documentation</h1>
              <p>Read about how Retainful works.</p>
            </Container>
          </div>
          <div className="container">
            <div className="docs-main-content">
              <div className="home-callouts">
                <h2 className="text-center">Welcome to Retainful</h2>
                <div className="row row--home-cards">
                  {DocsPage.renderCallouts()}
                </div>
                <div className="row row--home-cards"></div>
              </div>
            </div>
          </div>
          <div
            className="features-download-section text-center col-md-12"
            style={{ padding: '0' }}
          >
            <div className="features-download-intro wow fadeInDown">
              <h3>
                Recover Abandoned Carts &amp; Drive Repeat Sales. <br /> Grow
                your Revenue by 10x.
              </h3>
              <p>
                Start sending targeted email reminders and recover every single
                cart
              </p>
              <p>
                <a
                  className="btn-action btn-lg"
                  href="https://app.retainful.com/?utm_source=folder_cta&utm_campaign=get_start_free&utm_term=cta&utm_content=get_started_free"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Free
                </a>
              </p>
              <small>*No credit card required.</small>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DocsPage
