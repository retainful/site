import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GetStarted from '../components/getstarted'
import merock from '../images/reviews/merock.jpeg'
import LukeCavanagh from '../images/reviews/Luke-Cavanagh.jpeg'
import {StaticQuery} from "gatsby";
import Container from "../components/container";
import PageContent from "../components/pageContent";


const ReviewsPage = () => (
    <Layout>
        <SEO title="Our Customers | Retainful"
             description="Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases"
             keywords={[`abandoned cart recovery`, `WooCommerce Abandoned Cart recovery emails`, `ecommerce customer retention`, `woocommerce followup emails`, `next order coupons`, `shopify abandoned cart recovery`, `shopify abandoned cart analytics`]}/>

        <div className="review-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-center">
                            <img className="img-fluid"
                                 src={`${process.env.GATSBY_RF_MEDIA_URL}/home-banner-illustration.png`}
                                 alt="shopify-banner-illustration"/>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="feature-content">
                            <h3>Customer Reviews!</h3>
                            <p>Companies big and small trust Retainful to recover abandoned carts and drive repeat purchases.</p>
                            <p>Want to try it out? Start for free!</p>
                            <p><a className="btn-action btn-edge btn-lg"
                                  href="https://app.retainful.com/?utm_source=above_cta&utm_medium=get_started_free&utm_campaign=review_page"
                                  target="_blank" rel="noopener noreferrer">Get started Free</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="customer-reviews-section">
            <div className="container">
                <div className="customer-reviews">

                    <StaticQuery
                        query={ReviewsQuery}
                        render={data => {
                            return (
                                <PageContent
                                    excerptData={data.markdownRemark.htmlAst}
                                />
                            )
                        }}
                    />


                </div>

            </div>
        </div>

        <GetStarted/>

    </Layout>
);

export default ReviewsPage;


const ReviewsQuery = graphql`
 query ReviewsQuery{
  markdownRemark(frontmatter: {path: {eq: "/customer-reviews"}}){
    htmlAst
    frontmatter{
      path
    }
  }
} 
`