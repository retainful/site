import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout";
import Container from "../components/container"


export default function DocsPageTemplate({data}){
    return (
        <Layout>
            <h2>List of Posts</h2>
        </Layout>
    )
}

export const DocQuery = graphql`
    query DocsIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/docs/" } }
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
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

