import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import Container from "../components/container";
import NavSub from "../components/NavSub";
// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoryHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } in category: ${category}`

    return (
        <Layout>
            <div className="category-container">
                <div className="category-header">
                    <Container>
                        <h2>{categoryHeader}</h2>
                    </Container>
                </div>
                <Container>
                    <ul className="category-list">
                        <h4>{category}</h4>
                        {edges.map(({ node }) => {
                            const { title } = node.frontmatter
                            const { slug } = node.fields
                            const { excerpt } = node.excerpt
                            return (
                                <li key={slug}>
                                    <Link to={slug}>{title}</Link>
                                    <p>{excerpt}</p>
                                </li>
                            )
                        })}
                    </ul>
                    {/*
                      This links to a page that does not yet exist.
                      We'll come back to it!
                    */}
                </Container>
            </div>
        </Layout>
    )
}

Category.propTypes = {
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
                            path: PropTypes.string.isRequired,
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

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } }, fileAbsolutePath: { regex: "/blog/" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            category
          }
          fields{
             slug
          }
          excerpt
        }
      }
    }
  }
`