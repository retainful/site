import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout";
import Container from "../components/container"
import Breadcrumb from '../components/breadcrumb'

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
                                <Link to={post.node.frontmatter.path}><img src={post.node.frontmatter.cover_image} alt={post.node.frontmatter.title} /></Link>
                            </div>
                            <div className="content-section">
                                <h3><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
                                <p>
                                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                                </p>
                                <p>
                                    {post.node.excerpt}
                                </p>
                                <Link to={post.node.frontmatter.path}>Read more</Link>
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
                    id
                    frontmatter {
                        path
                        title
                        date(formatString: "DD MMMM, YYYY")
                        author
                        cover_image
                    }
                    excerpt
                }
            }
        }
    }
`

export default BlogPage
