const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

// Create slugs
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });

        createNodeField({
            node,
            name: 'ids',
            value: [node.frontmatter.id]
        });

        if (node.frontmatter.tags) {
            const tagPaths = node.frontmatter.tags.map(tag => `/${_.kebabCase(node.frontmatter.category)}/tags/${_.kebabCase(tag)}/`);
            createNodeField({ node, name: 'tagPaths', value: tagPaths });
        }

        if (node.frontmatter.layout === 'post') {
            const categoryPath = `/${_.kebabCase(node.frontmatter.category)}/`;
            createNodeField({ node, name: 'categoryPath', value: categoryPath });
        }
    }
};

// Create pages
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/blog-post.js');
    const docTemplate = path.resolve(`./src/templates/doc-template.js`);
    const docRootTemplate = path.resolve('src/templates/docRootTemplate.js');
    const tagTemplate = path.resolve("src/templates/tags.js");

    //Blog page
    const blog = graphql(`
    {
      allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { order: DESC, fields: frontmatter___date }
      ){
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
              cover_image
              tags
            }
            fields{
                slug
            }
          }
        }
      }
    }
  `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        createPaginatedPages({
            edges: res.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: 'src/templates/blog-post.js',
        })
        const posts = res.data.allMarkdownRemark.edges;
        let prefix = '/blog/';
        posts.forEach(({ node }) => {
            createPage({
                path: `${prefix}${node.fields.slug}`,
                component: postTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
        })
        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)
        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            })
        })
    });
    //Docs page
    const docs = graphql(`
		{
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/docs/" } }
				sort: { order: DESC, fields: frontmatter___date }
			){
                edges {
                  node {
                    html
                    id
                    frontmatter {
                      path
                      title
                      date
                      author
                      cover_image
                      tags
                    }
                    fields{
                        slug
                    }
                  }
                }
              }
		}
	`).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges;
        let prefix = '/docs/';
        posts.forEach(({ node }) => {
            createPage({
                path: `${prefix}${node.fields.slug}`,
                component: docTemplate,
                context: {
                    slug: node.fields.slug,
                },
            });
        });
        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)
        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    tag,
                },
            })
        })
    });
    // Doc root pages
    // const docRoots = new Promise((resolve, reject) => {
    //     // First get all directories inside docs
    //     const docTypes = dirs(path.resolve(__dirname, './content/docs'));
    //     if (docTypes && docTypes.length) {
    //         docTypes.forEach(docType => {
    //             createPage({
    //                 path: `/${docType}/`,
    //                 component: docRootTemplate,
    //                 context: {
    //                     docType,
    //                 },
    //             });
    //         });
    //         resolve();
    //     } else {
    //         reject(new Error(`No directories found for document roots.`));
    //     }
    // });

    return Promise.all([blog, docs]);
}
