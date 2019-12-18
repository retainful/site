import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import {Breadcrumb} from "gatsby-plugin-breadcrumb";
import Header from './header'
import Menu from './menu'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.scss'
// import HeadBanner from "./headBanner"

if (typeof window !== 'undefined') {
    window.jQuery = window.$ = require('jquery');
    require('bootstrap');
}

const Layout = ({children, className, location, crumbLabel}) => (
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
                <div className={"wrapper " + (className ? className : '')}>
                {/*<HeadBanner/>*/}
                    <Header siteTitle={data.site.siteMetadata.title}/>
                    <Menu />
                    <div id="main" className="main">
                        { /*location &&
                        <div className="breadcrumb-container">
                            <div className="container">
                                <Breadcrumb
                                    location={location}
                                    crumbLabel={crumbLabel}
                                    crumbStyle={{color: "#666"}}
                                    crumbActiveStyle={{color: "#6772e5"}}
                                />
                            </div>
                        </div>
                        */}
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
