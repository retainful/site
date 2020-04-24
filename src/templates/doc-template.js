import React from 'react'
import rehypeReact from "rehype-react"
import PropTypes from "prop-types"
import {Link, graphql} from 'gatsby'
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import {MdMenu} from "react-icons/md"
import styled from 'styled-components'
import Img from 'gatsby-image';
import Layout from "../components/layout";
import PrevNext from '../components/prevnext';
import MetaTags from '../components/Metatags';
import Share from '../components/share';
import SideNav from '../components/SideNav';
import SideNavLinks from '../constants/docsSideNavLinks';

import { FaChevronRight } from 'react-icons/fa'
import Container from "../components/container"
import Callout from '../components/callout'
import Highlight from '../components/highlight'
import Underline from '../components/underline'
import TitleLink from "../components/titleLink"
import LinkText from "../components/linkText"
import Gist from "../components/gist"
import Row from "../components/row"
import Col from "../components/column"
import Card from "../components/Card"

const PrimaryTitle = styled.h1`
    color: #f00;
    margin: 1em 0 0;
    font-weight: 600;
`
const SecondaryTitle = styled.h2`
    color: #ff0;
    margin: 1em 0 0;
    font-weight: 600;
`
const TertiaryTitle = styled.h3`
    color: #f0f;
    margin: 1em 0 0;
    font-weight: 600;
`

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        h1: PrimaryTitle,
        h2: SecondaryTitle,
        h3: TertiaryTitle,
        "call-out": Callout,
        highlight: Highlight,
        underline: Underline,
        "title-link": TitleLink,
        gist: Gist,
        "link-text": LinkText,
        row: Row,
        col: Col,
        card: Card,
    },
}).Compiler

function DocTemplate(props) {
    const url = props.data.site.siteMetadata.siteUrl;
    const thumbnail = props.data.markdownRemark.frontmatter.image &&
        props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src;
    const {title, image, description} = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;
    
    // console.log(props.pageContext);
    const {
        breadcrumb: { crumbs },
    } = props.pageContext;
    
    // console.log(crumbs);

    const customCrumbLabel = (crumbs[crumbs.length - 1].crumbLabel).replace(/-/g, " ");
    const currentPathLink = crumbs[crumbs.length - 1].pathname;

    const { category} = props.pageContext;
    const {edges, totalCount} = props.data.allMarkdownRemark;
    const categoryHeader = `List of post${
        totalCount === 1 ? "" : "s"
        } in ${category} (${totalCount})`;
    const toc = props.data.markdownRemark.tableOfContents;

    const disableLinks = ["/docs/woocommerce", "/docs/shopify", currentPathLink ];

    return (
        <Layout className="docs-single-page" location={props.location} crumbLabel={title}>
            <MetaTags
                title={title}
                description={description}
                thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div className="docs-header">
                <Container>
                    <h1 className="page-title">Documentation</h1>
                </Container>
            </div>
            <div className="breadcrumb-container">
                <div className="container">
                    <Breadcrumb crumbs={crumbs} crumbSeparator={<FaChevronRight />} crumbLabel={customCrumbLabel} disableLinks={disableLinks}
                    title="" />
                </div>
            </div>
            <div className="container docs-wrap">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <button id="showDocNavBtn" className="visible-xs btn btn-primary"><MdMenu/></button>
                        <div className="aside-menu" id="docNavLinkContent">
                            <SideNav navLinks={SideNavLinks} currentUrl={props.pageContext.slug}/>
                            <div className="btn-container">
                                <Link to="/docs" className="btn btn-primary">Back to Docs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="single-blog-post">
                            <div className="header">
                                <div className="image-section">
                                    {image && <Img fluid={image.childImageSharp.fluid}/>}
                                </div>
                                <h1>{title}</h1>
                            </div>
                            <div className="toc-wrapper">
                                {toc &&
                                <div className="table-of-contents">
                                    <h3>On this page</h3>
                                    <div dangerouslySetInnerHTML={{__html: toc}}/>
                                </div>
                                }
                                { /*<ol className="card_links">
                                        {edges.map(({ node }) => {
                                        const { title, description } = node.frontmatter
                                        const { slug } = node.fields
                                        const { excerpt } = node.excerpt
                                        return (
                                            <li key={slug} className={(props.pageContext.slug === slug ? 'active' : '')}>
                                                <Link to={slug}>{title}</Link>
                                            </li>
                                        )
                                        })}
                                    </ol>*/
                                }
                            </div>
                            <div className="content">
                                {renderAst(props.data.markdownRemark.htmlAst)}
                            </div>
                            <div className="footer">
                                {title &&
                                <div>
                                    <Share title={title} url={url} pathname={props.location.pathname}/>
                                    <PrevNext prev={prev && prev.node} next={next && next.node}/>
                                    <hr/>
                                    <div className="text-right">
                                        <Link to="/docs">Go Back</Link>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

DocTemplate.propTypes = {
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default DocTemplate

export const docQuery = graphql`
  query DocsByPath($slug: String!, $category: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      tableOfContents(
        pathToSlugField: "fields.slug"
      )
      frontmatter {
          title
          description
          image{
            childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
              }
          }
          author
          category
          date(formatString: "DD MMMM, YYYY")
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } }, fileAbsolutePath: { regex: "/docs/" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            category
          }
          fields{
             slug
          }
          excerpt
        }
      }
    }
    site {
        siteMetadata {
            siteUrl
          }
    }
  }
`
