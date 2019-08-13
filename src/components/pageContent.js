import React from 'react'
import rehypeReact from "rehype-react"
import Row from "./row"
import Col from "./column"
import Cta from "./cta"
import CtaBox from './ctabox'
import Callout from './callout'
import Container from './container'
import Highlight from './highlight'
import Underline from './underline'
import TitleLink from "./titleLink"
import LinkText from "./linkText"
import Gist from "./gist"
import Card from "./Card"
import Plan from "./Plan"
import SignupForm from './SignupForm';
import FeaturesContext from './FeaturesContext';
import FeaturesContextWithColumns from './FeaturesContextWithColumns';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
      "container": Container,
      "call-out": Callout,
      highlight: Highlight,
      underline: Underline,
      "title-link": TitleLink,
      gist: Gist,
      "link-text": LinkText,
      row: Row,
      column: Col,
      cta:Cta,
      "cta-box":CtaBox,
      card: Card,
      plan: Plan,
      "signup-form": SignupForm,
      "featurescontext": FeaturesContext,
      "featurescolumns": FeaturesContextWithColumns,
  },
}).Compiler


const PageContent = ({ excerptData }) => (
  <>
      {renderAst(excerptData)}
  </>
)
export default PageContent
