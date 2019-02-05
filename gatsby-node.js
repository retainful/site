/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const _ = require('lodash');
const createPaginatedPages = require('gatsby-paginate');

// Create pages
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    //Blog page
    const blog = graphql(`
    {
      allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { order: DESC, fields: frontmatter___date }
      ){
        edges {
          node {
            frontmatter {
              title
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
            console.log(result.errors)
            return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;
        const blogTemplate = path.resolve('./src/templates/blog-post.js');
        const tagsTemplate = path.resolve('./src/templates/tag-template.js');

        //All tags
        let allTags = [];
        // Iterate through each post, putting all found tags into `allTags array`
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                allTags = allTags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        allTags = _.uniq(allTags)

        allTags.forEach((tag, index) => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagsTemplate,
                context: {
                    tag,
                }
            })
        })

        posts.forEach(({ node }, index) => {
            createPage({
                path: node.fields.slug,
                component: blogTemplate,
                context: {
                    slug: node.fields.slug,
                    prev: index === 0 ? null : posts[index - 1],
                    next: index === result.length - 1 ? null : posts[index + 1],
                }, // additional data can be passed via context
            })
        });
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
                    frontmatter {
                      title
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
            console.log(result.errors)
            return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;
        const docTemplate = path.resolve(`./src/templates/doc-template.js`);
        const tagsTemplate = path.resolve('./src/templates/tag-template.js');

        //All tags
        let allTags = [];
        // Iterate through each post, putting all found tags into `allTags array`
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                allTags = allTags.concat(edge.node.frontmatter.tags)
            }
        })
        // Eliminate duplicate tags
        allTags = _.uniq(allTags)

        allTags.forEach((tag, index) => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: tagsTemplate,
                context: {
                    tag,
                }
            })
        })

        posts.forEach(({ node }, index) => {
            createPage({
                path: node.fields.slug,
                component: docTemplate,
                context: {
                    slug: node.fields.slug,
                    prev: index === 0 ? null : posts[index - 1],
                    next: index === result.length - 1 ? null : posts[index + 1],
                }, // additional data can be passed via context
            })
        });
    });

    return Promise.all([blog, docs]);
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

    }
}