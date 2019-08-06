import React from 'react'
import rehypeReact from "rehype-react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Container from './container'
import SEO from './seo'
import Row from "./row"
import Col from "./column"
import TableOfContents from "./TableOfContents"
import Cta from "./cta"
import CtaBox from './ctabox'
import Callout from './callout'
import Highlight from './highlight'
import Underline from './underline'
import TitleLink from "./titleLink"
import LinkText from "./linkText"
import Gist from "./gist"
import Card from './Card'
import HeaderContent from './headercontent'
import Footerfunnel from "./footerfunnel"
import Featurecontent from "./featuretool"
import FeaturedReviews from './featuredreviews'
import Metatags from "./Metatags"
import GetStarted from './getstarted'
import Footer from "./footer"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
      "call-out": Callout,
      highlight: Highlight,
      underline: Underline,
      "title-link": TitleLink,
      gist: Gist,
      "link-text": LinkText,
      row:Row,
      column:Col,
      "table-contents": TableOfContents,
      cta:Cta,
      "cta-box":CtaBox,
      "container":Container,
      card:Card,
      headercontent:HeaderContent,
      funnel:Footerfunnel,
      featurecontent:Featurecontent,
      reviews:FeaturedReviews,
      getstarted:GetStarted,
      footer:Footer,
  },
}).Compiler


const Post = ({ title,excerptData,description,keywords }) => (
  <>
    <Metatags title={title} description={description} keywords={keywords} />
    {renderAst(excerptData)}
  </>
)
export default Post
