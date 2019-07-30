import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Logo from '../images/retainful-logo.png'
import Container from "../components/container"
import Menu from './menu'
import {MdMenu} from 'react-icons/md'

class Header extends React.Component {
    componentDidMount () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('past-main effect-main');
            } else {
                $('.navbar').removeClass('past-main');
            }
        })
        $("#showMenuBtn").on("click", function(){
          $('#navbarSupportedContent').toggleClass('show');
        });
        $(".scroll-down").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 800);
        });
        $("#showDocNavBtn").on("click", function(){
            $('#docNavLinkContent').toggleClass('show');
        });
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }
    render () {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top container-fluid">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={ Logo } alt="Retainful" />
                    </Link>
                    <button id="showMenuBtn" className="visible-xs btn btn-primary"><MdMenu/></button>
                    <Menu/>
                </div>
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

export default Header
