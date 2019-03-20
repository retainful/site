import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";
import Container from "../components/container";
import withSubNav from '../components/NavSub';
import Img from 'gatsby-image';

const BlogPage = ({data}) => {
    return (
        <Layout>
            {/*<Breadcrumb>*/}
                {/*<h2>Blog</h2>*/}
            {/*</Breadcrumb>*/}
            <div className="blog-list-container">
                <Container type="s">
                    { data.allMarkdownRemark.edges.map(post => (
                        <div className="blog-post" key={post.node.id}>
                            <div className="image-section">
                                <Link to={post.node.fields.slug}>
                                    { post.node.frontmatter.image &&
                                    <img src={post.node.frontmatter.image} alt={post.node.frontmatter.title} />
                                    }
                                </Link>
                            </div>
                            <div className="content-section">
                                <h3><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h3>
                                <p>
                                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} in
                                        <Link to={'blog/category/'+ post.node.frontmatter.category}> {post.node.frontmatter.category}</Link></small>
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
                        image
                        category
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
