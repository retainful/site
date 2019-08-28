import React from 'react'
const PrevNext = (props) => {

    const { prev, next } = props

    return (
        <ul className="pagination-links">
            {prev && <li className="pull-left"><strong>Previous</strong><a href={(prev.fields.slug).replace(/\/$/, "")}>
                 {" "}
                {prev.frontmatter.title}</a></li>}
            {next && <li className="pull-right"><strong>Next</strong><a href={(next.fields.slug).replace(/\/$/, "")}>
                  {" "} {next.frontmatter.title}

            </a></li>}
        </ul>
    )
}

export default PrevNext;