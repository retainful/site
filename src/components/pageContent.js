import React from 'react'
import rehypeReact from "rehype-react"
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
import Card from "./Card"
import Plan from "./Plan"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
      "call-out": Callout,
      highlight: Highlight,
      underline: Underline,
      "title-link": TitleLink,
      gist: Gist,
      "link-text": LinkText,
      row: Row,
      column: Col,
      "table-contents": TableOfContents,
      cta:Cta,
      "cta-box":CtaBox,
      card: Card,
      plan: Plan,
  },
}).Compiler


const PageContent = ({ excerptData }) => (
  <>
      {renderAst(excerptData)}
  </>
)
export default PageContent
