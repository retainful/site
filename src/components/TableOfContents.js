import React from 'react';

const TableOfContents = (props) => {
    return(
    <div className="table-of-contents">
        <h4>Table of Contents</h4>
         <div dangerouslySetInnerHTML={{__html:props.toc}}/>
    </div>
)
}

export default TableOfContents;