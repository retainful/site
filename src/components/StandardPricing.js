import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import PageContent from "../components/pageContent";

class StandardPricingTable extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <StaticQuery
                    query={StandardPricingPlanQuery}
                    render={data => {
                        return (
                            <PageContent
                                excerptData={data.markdownRemark.htmlAst}
                            />
                        )
                    }}
                />
            </div>
        )
    }
}

export default StandardPricingTable;


const StandardPricingPlanQuery = graphql`
   query StandardPricingPlanQuery{
      markdownRemark(frontmatter: {path: {eq: "/standard-pricing-plans"}}){
        htmlAst
        frontmatter{
          path
        }
      }
   } 
`