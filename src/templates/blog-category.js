import React from "react"
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';
import PropTypes from "prop-types"
// Components
import Layout from "../components/layout";
import Container from "../components/container";
import MetaTags from '../components/Metatags';
//Constants
import BLOGCATEGORIES from "../constants/blogCategories";

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    static renderCategoryMeta(category, totalCount) {
        let categoryMeta = BLOGCATEGORIES.map(function(meta) {
            if(category === meta.CATEGORY){
                return(
                    <>
                        <MetaTags title={meta.METATITLE} description={meta.DESCRIPTION} thumbnail={meta.THUMBNAIL} keywords={meta.KEYWORDS} />;
                        <div className="category-container">
                            <div className="category-header">
                                <Container>
                                    <h2>{`${totalCount} post${
                                        totalCount === 1 ? "" : "s"
                                        } in category: ${meta.TITLE}`}</h2>
                                </Container>
                            </div>
                        </div>
                    </>
                )
            }
        });
        return categoryMeta;
    }
    render() {
        const { category } = this.props.pageContext;
        const { edges, totalCount } = this.props.data.allMarkdownRemark;
        return (
            <Layout>
                { Category.renderCategoryMeta(category, totalCount) }
                <div className="blog-list-container">
                    <Container type="s">
                        {edges.map((post) => {
                            return (
                                <div className="blog-post" key={post.node.fields.slug}>
                                    <div className="image-section">
                                        <Link to={(post.node.fields.slug).replace(/\/$/, "")}>
                                            <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} alt={post.node.frontmatter.title} />
                                        </Link>
                                    </div>
                                    <div className="content-section">
                                        <h3><Link to={(post.node.fields.slug).replace(/\/$/, "")}>{post.node.frontmatter.title}</Link></h3>
                                        <p>
                                            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} in
                                                <Link to={'blog/category/'+ post.node.frontmatter.category}> {post.node.frontmatter.category}</Link></small>
                                        </p>
                                        <p>
                                            {post.node.frontmatter.description}
                                        </p>
                                        <p>
                                            {post.node.excerpt}
                                        </p>
                                        <Link to={(post.node.fields.slug).replace(/\/$/, "")}>Read more</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </Container>
                </div>
            </Layout>
        );
    }
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
              description
              date(formatString: "DD MMMM, YYYY")
              author
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              category
            }
            excerpt
            fields {
              slug
            }
          }
      }
    }
  }
`