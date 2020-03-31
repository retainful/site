import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class ElectronicTemplates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="electronic">
        <h2 className="pb-3">Electronic</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/the-11-best-abandoned-cart-emails-to-win-back-customers.jpeg"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/the-11-best-abandoned-cart-emails-to-win-back-customers.jpeg'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/Screenshot-3.png
"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/Screenshot-3.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/Screenshot-5.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/Screenshot-5.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/sl-your-cart-awaits.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/sl-your-cart-awaits.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/cart-abandonment-email-the-curved-tv-seems-like.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/cart-abandonment-email-the-curved-tv-seems-like.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/connor-crumpton.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/connor-crumpton.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/elevate-living-joy.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/electronic/elevate-living-joy.png'
                  )
                }
              >
                Preview
              </button>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

export default ElectronicTemplates
