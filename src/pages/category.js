import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import Container from "../components/container"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import {Helmet} from "react-helmet"
import {Link, graphql} from "gatsby"

const CategoryPage = ({
                      data: {
                          allMarkdownRemark: {group},
                          site: {
                              siteMetadata: {title},
                          },
                      },
                  }) => (
    <Layout>
        <Container>
            <div>
                <Helmet title={title}/>
                <div>
                    <h1>Category</h1>
                    <ul>
                        {group.map(tag => (
                            <li key={tag.fieldValue}>
                                <Link to={`category/${kebabCase(tag.fieldValue)}/`}>
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    </Layout>
)

CategoryPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      group(field: frontmatter___category) {    
        fieldValue
        totalCount
      }
    }
  }
`