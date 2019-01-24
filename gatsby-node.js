const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create slugs
// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions;
//
//     if (node.internal.type === `MarkdownRemark`) {
//         const value = createFilePath({ node, getNode });
//         createNodeField({
//             name: `slug`,
//             node,
//             value,
//         });
//     }
// };

// Create pages
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/blog-post.js');
    const docTemplate = path.resolve(`./src/templates/doc-template.js`);
    const docRootTemplate = path.resolve('src/templates/docRootTemplate.js');

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
                    }
                  }
                }
              }
		}
	`).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: docTemplate,
            });
        });
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
