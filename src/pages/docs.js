import React from 'react'
import {Link, graphql} from 'gatsby'
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {MdMenu} from "react-icons/md";
import Layout from "../components/layout";
import Container from "../components/container"
import HOME_CARDS from '../constants/docsCards';
import CALLOUTS from '../constants/docsCallouts';
import SEO from '../components/seo';
import SideNav from '../components/SideNav';
import SideNavLinks from '../constants/docsSideNavLinks';


class DocsPage extends React.Component {
    constructor(props) {
        super(props);
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
                    {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL}
                                                  className="card_link">{link.TEXTNODE}</Link>)}
                </div>
                <div className="card_button">
                    <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
                </div>
            </div>
        ));
    }

    static renderCallouts() {
        return CALLOUTS.map((card) => {
            const cardClass = `card home-callout callout--${card.BADGE}`;
            return (
                <div className="col-md-6" key={card.TITLE}>
                    <div className={cardClass}>
                        <h3 className="card_title is-size-h2 m-bottom-2">{card.TITLE}</h3>
                        <p className="is-p">{card.COPY}</p>
                        <Link to={card.LINK} className="btn btn-primary center hidden-link">Get Started</Link>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <Layout location={this.props.location} crumbLabel="Docs">
                <SEO title="Retainful Documentation"
                description="Learn how to recover abandoned carts in your WooCommerce and Shopify stores. Drive repeat purchases through next order coupons."
                keywords={[`Retainful documentation`, `retainful guide`, `woocommerce abandoned cart recovery`, `shopify abandoned cart recovery`, `shopify next order coupon`, `woocommerce next order coupon`]}
                />
                <div className='docs-container'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <button id="showDocNavBtn" className="visible-xs btn btn-primary"><MdMenu/></button>
                                <div className="aside-menu" id="docNavLinkContent">
                                    <SideNav navLinks={SideNavLinks} currentUrl={this.props.location.pathname}/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="docs-main-content">
                                    <h1 className="page-title">Documentation</h1>
                                    <p>Read about how Retainful works.</p>
                                    <div className="home-callouts">
                                        <div className="row row--home-cards">
                                            {DocsPage.renderCallouts()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default DocsPage
