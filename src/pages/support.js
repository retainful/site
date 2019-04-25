import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SupportPage = () => (
  <Layout>
    <SEO title="Support" />
    <div className="container">
        <h1>Support</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SupportPage
