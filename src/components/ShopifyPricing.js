import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import PageContent from "../components/pageContent";

class ShopifyPricingTable extends React.Component {
    render() {
        return (
            <StaticQuery
                query={PricingPlanShopifyQuery}
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

export default ShopifyPricingTable;


const PricingPlanShopifyQuery = graphql`
   query PricingPlanShopifyQuery{
      markdownRemark(frontmatter: {path: {eq: "/shopify-pricing-plans"}}){
        htmlAst
        frontmatter{
          path
        }
      }
   } 
`;