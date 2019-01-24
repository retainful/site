import React from 'react'
import rehypeReact from "rehype-react"
import {Link} from 'gatsby'
import {graphql} from 'gatsby'
import Layout from "../components/layout";
import SEO from '../components/seo'
import styled from 'styled-components'

import Container from "../components/container"
import Callout from '../components/callout'
import Highlight from '../components/highlight'
import Underline from '../components/underline'
import TitleLink from "../components/titleLink"
import LinkText from "../components/linkText"
import Gist from "../components/gist"
import Row from "../components/row"
import Col from "../components/column"

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
    },
}).Compiler

export default function PostTemplate({data}) {
    const { markdownRemark : post } = data;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} meta={post.frontmatter.title} description={post.frontmatter.title} />
            <div className="single-blog-post">
                <Container type='s'>
                    <div className="header">
                        { post.frontmatter.cover_image !== null &&
                        <div className="image-section">
                            <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
                        </div>
                        }
                        <h1>{post.frontmatter.title}</h1>
                        <p>
                            Posted by {post.frontmatter.author} on {post.frontmatter.date}
                        </p>
                        <hr/>
                    </div>
                    <div className="content">
                        { renderAst(post.htmlAst) }
                    </div>
                    <div className="footer">
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

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
          path
          title
          author
          date(formatString: "DD MMMM, YYYY")
          cover_image
      }
    }
  }
`
