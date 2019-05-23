import React from 'react'
const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="pagination-links">
            {prev && <li className="pull-left"><a href={(prev.fields.slug).replace(/\/$/, "")}>
                Previous {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="pull-right"><a href={(next.fields.slug).replace(/\/$/, "")}>
                Next  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;