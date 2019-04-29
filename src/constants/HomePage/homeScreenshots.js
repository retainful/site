import React from 'react';
import SCREENSHOTS from '../screenshots';

class HomeScreenshots extends React.Component {
    static renderScreenshots() {
        return SCREENSHOTS.map(screenshot => (
            <div className="col-md-4 col-sm-6" key={screenshot.NAME}>
                <div className="card">
                    <img src={screenshot.IMAGE} className="img-responsive" alt={screenshot.NAME} />
                    <div className="card-body">
                        <h4>{screenshot.NAME}</h4>
                    </div>
                </div>
            </div>
        ));
    }
    render() {
        return (
            <div className="screenshots-section">
                <div className="container">
                    <div className="text-center">
                        <h3>Screenshots</h3>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        {HomeScreenshots.renderScreenshots()}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScreenshots;