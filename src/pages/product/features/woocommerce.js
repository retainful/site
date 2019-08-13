import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

import PageContent from "../../../components/pageContent";
import Container from "../../../components/container";
import Layout from '../../../components/layout'
import SEO from '../../../components/seo';
import HomeScreenshots from '../../../constants/featuresScreenshots';

import LukeCavanagh from '../../../images/Luke-Cavanagh.jpeg';


class FeaturesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <SEO title="WooCommerce Abandoned Cart Recovery Email Plugin Features"
                     description="Let your customers recover abandoned carts in a single click in your WooCommerce store. Automatically send a series of email follow-ups to recover lost sales. Also send unique, single-use coupons for next purchases automatically."
                     keywords={[`woocommerce abandoned cart plugin`, `woocommerce abandoned cart recovery emails`, `woocommerce email follow-ups`, `woocommerce next order coupon`, `recover woocommerce abandoned carts`, `retainful woocommerce features`]}/>
                <div className="features-banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <h3>Grow your WooCommerce Revenue!</h3>
                                <p>Retainful increases WooCommerce sales by driving repeated purchases and also encourages
                                    customers to instantly buy the abandoned cart items.</p>
                                <p>
                                    <a className="btn-action btn-edge btn-lg"
                                       href={`${process.env.GATSBY_WOOCOMMERCE_PLUGIN_URL}`}
                                       target="_blank" rel="noopener noreferrer">Download Free Plugin</a>
                                    <a className="btn-action m-l-10 btn-outlined btn-lg"
                                       href="http://demo.retainful.com/"
                                       target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </p>
                            </div>
                            <div className="col-md-7">
                                <div className="text-center">
                                    <p><img
                                        src="https://raw.githubusercontent.com/retainful/site-images/master/woocommerce-features-images/retainful-woocommerce-feature-banner-dashboard.png"
                                        alt="woocommerce" className="img-responsive"/></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-review-container">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <h4>Easy to use plugin for <strong>abandoned cart</strong>. Clean plugin settings and the app is very easy to use.</h4>
                                <p><strong>- Luke Cavanagh</strong> , LiquidWeb</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                                <img src={LukeCavanagh} className="img-responsive" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <StaticQuery
                    query={FeaturesPageQuery}
                    render={data => {
                        return (
                            <PageContent
                                excerptData={data.markdownRemark.htmlAst}
                            />
                        )
                    }}
                />

                {/*<HomeScreenshots/>*/}
                <div className="features-download-section text-center">
                    <div className="container features-download-intro wow fadeInDown">
                        <h3>Grow your revenue by 10x.</h3>
                        <p>Start recovering abandoned carts and <br/> driving repeat purchases in your WooCommerce store</p>
                        <p>
                            <a className="btn-action btn-lg" href="https://app.retainful.com"
                               target="_blank" rel="noopener noreferrer">Get started for FREE</a>
                        </p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default FeaturesPage

export const FeaturesPageQuery = graphql`
 query FeaturesPageQuery{
      markdownRemark(frontmatter: {path: {eq: "/woocommerce-features"}}){
        htmlAst
        frontmatter{
          path
        }
      }
  } 
`