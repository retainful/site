import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";
import Container from "../components/container";
import Breadcrumb from '../components/breadcrumb';
import Img from 'gatsby-image';

const BlogPage = ({data}) => {
    return (
        <Layout>
            <Breadcrumb>
                <h2>Blog</h2>
            </Breadcrumb>
            <div className="blog-list-container">
                <Container type="s">
                    { data.allMarkdownRemark.edges.map(post => (
                        <div className="blog-post" key={post.node.id}>
                            <div className="image-section">
                                <Link to={post.node.fields.slug}>
                                    {post.node.frontmatter.image && <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />}
                                </Link>
                            </div>
                            <div className="content-section">
                                <h3><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h3>
                                <p>
                                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                                </p>
                                <p>
                                    {post.node.excerpt}
                                </p>
                                <Link to={post.node.fields.slug}>Read more</Link>
                            </div>
                        </div>
                    )) }
                </Container>
            </div>
        </Layout>
    )
}

export const PostQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
            sort: {fields: [frontmatter___date], order: DESC}, limit: 10
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        author
                        image {
                          childImageSharp {
                            resize(width: 1000, height: 420) {
                              src
                            }
                            fluid(maxWidth: 786) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                    }
                    excerpt
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default BlogPage
