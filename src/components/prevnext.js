import React from 'react'
const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="pagination-links">
            {prev && <li className="pull-left"><a href={prev.fields.slug}>
                Previous {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="pull-right"><a href={next.fields.slug}>
                Next  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;