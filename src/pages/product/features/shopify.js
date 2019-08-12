import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo';
import FeatureIcon from '../../../images/features-icon-sample.png';
import PageContent from "../../../components/pageContent";

const ShopifyFeaturesPage = () => (
    <Layout>
        <SEO title="Recovery Abandoned Carts and Drive Repeat Purchases in your Shopify Store"
             description="Let your customers recover abandoned carts in a single click in your Shopify store. Automatically send a series of email follow-ups to recover lost sales. Also send unique, single-use coupons for next purchases automatically."
             keywords={[`shopify abandoned cart plugin`, `shopify abandoned cart recovery emails`, `shopify email follow-ups`, `shopify next order coupon`, `recover shopify abandoned carts`, `retainful shopify features`]}/>
        <div className="features-banner shopify">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="feature-content">
                            <h3>Grow your Shopify Revenue!</h3>
                            <p>Recover Abandoned Carts and Drive Repeat Sales.</p>
                            <p>Customize all your store notification emails, and match your branding</p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                                  target="_blank" rel="noopener noreferrer">Get started Free</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <img className="img-fluid"
                                 src={`${process.env.GATSBY_RF_MEDIA_URL}/home-banner-illustration.png`}
                                 alt="shopify-banner-illustration"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <StaticQuery
            query={ShopifyFeaturesPageQuery}
            render={data => {
                return (
                    <PageContent
                        excerptData={data.markdownRemark.htmlAst}
                    />
                )
            }}
        />
        <div className="features-download-section text-center">
            <div className="container features-download-intro wow fadeInDown">
                <h3>Recover Abandoned Carts & Drive Repeat Sales. <br/> Grow your Shopify Sales</h3>
                <p>Start sending targeted email reminders and recover every single cart</p>
                <p>
                    <a className="btn-action btn-lg" href="https://app.retainful.com"
                       target="_blank" rel="noopener noreferrer">Get Started Free</a>
                </p>
                <small>*No credit card required.</small>
            </div>
        </div>
    </Layout>
)

export default ShopifyFeaturesPage

export const ShopifyFeaturesPageQuery = graphql`
 query ShopifyFeaturesPageQuery{
      markdownRemark(frontmatter: {path: {eq: "/shopify-features"}}){
        htmlAst
        frontmatter{
          path
        }
      }
  } 
`