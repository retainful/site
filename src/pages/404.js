import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from "../components/container";

import DogBite from "../images/Dog-Ate-big.png";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-404-container">
        <Container>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2>Oops!..</h2>
                    <h3>Looks like a Dog Ate this Page</h3>
                    <p>The page you're looking for is unavailable, go back to home.</p>
                    <div>
                        <Link to='/' className="btn btn-action btn-lg">Back to Home</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <p className="text-center">
                        <img src={DogBite} alt="Dog-Ate-big"/>
                    </p>
                </div>
            </div>


        </Container>
    </div>
  </Layout>
)

export default NotFoundPage
