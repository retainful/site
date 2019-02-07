import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout";
import Container from "../components/container"
import HOME_CARDS from '../constants/homeCards';
import CALLOUTS from '../constants/homeCallouts';
import Search from '../components/Search';

class DocsPage extends React.Component {
    static renderCards() {
        return HOME_CARDS.map(card => (
            <div className="card card-home col-md-6 ta-center" key={card.TITLE}>
                <div className="card_inner">
                    <span className="card_icon">{card.ICON}</span>
                    <h3 className="card_title" >{card.TITLE}</h3>
                    {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card_link">{link.TEXTNODE}</Link>)}
                </div>
                <div className="card_button">
                    <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
                </div>
            </div>
        ));
    }
    static renderCallouts() {
        return CALLOUTS.map((card) => {
            const cardClass = `card home-callout col-md-4 callout--${card.BADGE}`;
            return (
                <div className={cardClass} key={card.TITLE}>
                    <div className="home-callout_badge">
                        {card.BADGE}
                    </div>
                    <h3 className="card_title is-size-h2 m-bottom-2">{card.TITLE}</h3>
                    <p className="is-p">{card.COPY}</p>
                    <Link to={card.LINK} className="btn btn-primary center">Get Started</Link>
                </div>
            );
        });
    }
    render(){
        return (
            <Layout>
                <div className='docs-container'>
                    {/*<div className="search-hero text-center">*/}
                        {/*<Container type="s">*/}
                            {/*<div className="search-hero__bg">*/}
                                {/*<h1 className="page-title">Knowledge Center</h1>*/}
                                {/*<Search />*/}
                            {/*</div>*/}
                        {/*</Container>*/}
                    {/*</div>*/}
                    <div className="home-callouts">
                        <Container type="l">
                            <div className="row row--home-cards">
                                {DocsPage.renderCallouts()}
                            </div>
                        </Container>
                    </div>
                    <div className="home-featured">
                        <Container type="s">
                            <h2>Featured Resources</h2>
                            <div className="row row--home-cards">
                                {DocsPage.renderCards()}
                            </div>
                        </Container>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default DocsPage
