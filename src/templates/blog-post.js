import React from 'react'
import rehypeReact from "rehype-react"
import {Link, graphql} from 'gatsby';
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
import TableOfContents from "../components/TableOfContents"
import Cta from "../components/cta"
import CtaBox from '../components/ctabox'

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

const renderAst = toc => new rehypeReact({
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
        column: Col,
        toc : props => (<TableOfContents toc={toc} {...props}></TableOfContents>),
        cta:Cta,
        "cta-box":CtaBox
    },
}).Compiler

export default function BlogPost(props) {
    const url = props.data.site.siteMetadata.siteUrl;
    const sitename = props.data.site.siteMetadata.title;
    const thumbnail = props.data.markdownRemark.frontmatter.image.childImageSharp.fluid.src;
    const title = props.data.markdownRemark.frontmatter.title;
    const datePublished = props.data.markdownRemark.frontmatter.date;
    const author = props.data.markdownRemark.frontmatter.author;
    const {prev, next} = props.pageContext;
    const toc = props.data.markdownRemark.tableOfContents;
 
    return (
        <Layout>
            <MetaTags
                title={title}
                description={props.data.markdownRemark.frontmatter.description}
                thumbnail={url+thumbnail}
                url={url}
                pathname={props.location.pathname}
                datePublished = {datePublished}
                datemodified = {props.data.markdownRemark.frontmatter.datemodified}
                isBlogPost= {true}
                author={author}
                sitename={sitename}
                keywords = {props.data.markdownRemark.frontmatter.keywords}
            />
            <div className="single-blog-post">
                <Container type='s'>
                    <div className="header">
                        {/*<div className="image-section">*/}
                            {/*{image && <Img fluid={image.childImageSharp.fluid}/>}*/}
                        {/*</div>*/}
                        { props.data.markdownRemark.frontmatter.image !== null &&
                        <div className="image-section">
                            <Img fluid={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid} alt={title} />
                        </div>
                        }
                        <h1>{title}</h1>
                        {props.data.markdownRemark.frontmatter.author && props.data.markdownRemark.frontmatter.date && props.data.markdownRemark.frontmatter.category &&
                        <p>
                            Posted
                            by {props.data.markdownRemark.frontmatter.author} on {props.data.markdownRemark.frontmatter.date} in
                            <Link
                                to={'blog/category/' + props.data.markdownRemark.frontmatter.category}> {props.data.markdownRemark.frontmatter.category}</Link>
                        </p>
                        }
                        <hr/>
                    </div>         
                    <div className="content">           
                        {renderAst(toc)(props.data.markdownRemark.htmlAst)}
                    </div>
                    <div className="footer">
                        <Share title={title} url={url} pathname={props.location.pathname}/>
                        <PrevNext prev={prev && prev.node} next={next && next.node}/>
                        <div className="text-right">
                            <hr/>
                            <Link to="/blog">Go Back</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      tableOfContents(
        pathToSlugField: "fields.slug"
      )
      frontmatter {
          title
          description
          category
          keywords
          image{
              childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
              }
          }
          author
          date(formatString: "DD MMMM, YYYY")
          datemodified(formatString: "DD MMMM, YYYY")
      }
    }
    site {
        siteMetadata {
            siteUrl
            title
          }
    }
  }
`
