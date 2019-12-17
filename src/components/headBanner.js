import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Logo from '../images/retainful-logo.png'
import Container from "../components/container"
import Menu from './menu'
import {MdMenu} from 'react-icons/md'

class HeadBanner extends React.Component {
    componentDidMount () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('.top-bar').addClass('fixed-bottom');
            } else {
                $('.top-bar').removeClass('fixed-bottom');
            }
        })
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
          <div class="top-bar p-2 affix-top text-white" style={{backgroundColor:'#f27052'}} data-spy="affix" data-offset-top="200">
            <div class="container">
              <div class="moduletable topbar-module">
                <div class="custom topbar-module">
                  <div class="text-center topbar-offer-batch">
                    <p>
                    <span>
                    30% OFF BFCM Mega Sale!!! Offer Extended Till <strong>18th December</strong>
                    <span className="ml-2 mr-2" style={{fontSize: '15px',border: '1px dashed #fff',padding: '6px 10px',borderRadius: '4px'}}>No Coupon Code Required</span>
                    <span>
                    <Link className="text-white ml-2 btn" style={{backgroundColor:'#3abd82'}} to="/black-friday-2019">Buy Now</Link>
                  </span>
                  </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

HeadBanner.propTypes = {
  siteTitle: PropTypes.string,
}

HeadBanner.defaultProps = {
  siteTitle: ``,
}

export default HeadBanner
