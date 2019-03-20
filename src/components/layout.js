import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Header from './header'
import Menu from './menu'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <div className="wrapper">
                    <Header siteTitle={data.site.siteMetadata.title}/>
                    <Menu />
                    <div id="main" className="main">
                        {children}

                        <Footer/>
                    </div>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
