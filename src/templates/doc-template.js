import React from 'react'
import rehypeReact from "rehype-react"
import {Link} from 'gatsby'
import {graphql} from 'gatsby'
import Layout from "../components/layout";
import styled from 'styled-components'
import Img from 'gatsby-image';
import PrevNext from '../components/prevnext';
import MetaTags from '../components/Metatags';
import Share from '../components/share';

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
    const { title, image } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.excerpt}
                thumbnail={thumbnail && url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div className="single-blog-post">
                <Container type='s'>
                    <div className="header">
                        <div className="image-section">
                            {image && <Img fluid={image.childImageSharp.fluid} />}
                        </div>
                        <h1>{title}</h1>
                    </div>
                    <div className="content">
                        { renderAst(props.data.markdownRemark.htmlAst) }
                    </div>
                    <div className="footer">
                        {title &&
                            <div>
                                <Share title={title} url={url} pathname={props.location.pathname} />
                                <PrevNext prev={prev && prev.node} next={next && next.node} />
                                <hr/>
                                <div className="text-right">
                                    <Link to="/blog">Go Back</Link>
                                </div>
                            </div>
                        }
                    </div>
                </Container>
            </div>
        </Layout>
    )
}
export default DocTemplate

export const docQuery = graphql`
  query DocsByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      frontmatter {
          title
            image
          author
          date(formatString: "DD MMMM, YYYY")
      }
    }
    site {
        siteMetadata {
            siteUrl
          }
    }
  }
`
