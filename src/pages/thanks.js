import React from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";

export default () => (
    <Layout>
        <SEO title="Retainful Thank you" />
        <div className="container">
            <div>
                <h1>Thank you!</h1>
                <p>This is a custom thank you page for form submissions</p>
            </div>
        </div>
    </Layout>
);