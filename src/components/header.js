import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Logo from '../images/retainful-logo.png'
import Container from "../components/container"
import Menu from './menu'

class Header extends React.Component {
    componentDidMount () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('past-main effect-main');
            } else {
                $('.navbar').removeClass('past-main');
            }
        })
    }
    render () {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top" >
                <Container type='s'>
                    <Link className="navbar-brand" to="/">
                        <img src={ Logo } alt="Retainful" />
                    </Link>
                    <Menu/>
                </Container>
            </nav>
        )
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export const query = graphql`
    query{
        fileName: file(relativePath: { eq: "images/retainful-logo.png" }){
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Header
