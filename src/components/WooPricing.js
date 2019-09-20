import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import PageContent from "../components/pageContent";

class WooPricingTable extends React.Component {
    render() {
        return (
            <StaticQuery
                query={PricingPlanWoocommerceQuery}
                render={data => {
                    return (
                        <PageContent
                            excerptData={data.markdownRemark.htmlAst}
                        />
                    )
                }}
            />
        )
    }
}

export default WooPricingTable;


const PricingPlanWoocommerceQuery = graphql`
   query PricingPlanWoocommerceQuery{
      markdownRemark(frontmatter: {path: {eq: "/woocommerce-pricing-plans"}}){
        htmlAst
        frontmatter{
          path
        }
      }
   } 
`