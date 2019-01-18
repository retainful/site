const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js')

    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
              cover_image {
                    publicURL
                    childImageSharp {
                        sizes(maxWidth: 1240 ) {
                            srcSet
                        }
                    }
              }
            }
          }
        }
      }
    }
  `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })
    })
}