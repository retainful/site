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
              category
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
        const categoryPage = path.resolve('src/templates/blog-category.js');

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
        const blogCategorySet = new Set();
        posts.forEach(({ node }, index) => {
            const {
                category
            } = node.frontmatter;
            blogCategorySet.add(category);
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
        //Category page
        // Eliminate duplicate tags
        const categoryList = _.uniq(Array.from(blogCategorySet));
        categoryList.forEach((category) => {
            createPage({
                path: `/blog/category/${_.kebabCase(category)}/`,
                component: categoryPage,
                context: {
                    category,
                },
            });
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
                      category
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
        const categoryPage = path.resolve('src/templates/docs-category.js');

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
        const docsCategorySet = new Set();
        posts.forEach(({ node }, index) => {
            const {
                category
            } = node.frontmatter;
            docsCategorySet.add(category);
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

        //Category page
        // Eliminate duplicate Category
        // const docCategoryList = _.uniq(Array.from(docsCategorySet));
        // const categoryList = Array.from(docsCategorySet);
        // docCategoryList.forEach((category) => {
        //     createPage({
        //         path: `/docs/${_.kebabCase(category)}/`,
        //         component: categoryPage,
        //         context: {
        //             category,
        //         },
        //     });
        // });
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