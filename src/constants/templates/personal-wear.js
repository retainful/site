import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class PersonalWearTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="personal-wear">
        <h2 className="pb-3">Personal Wear</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/sl-still-thinking-about-chesapeake.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/sl-still-thinking-about-chesapeake.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/last-chance-to-get-the-item-left-in-your-cart-and.jpeg"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/last-chance-to-get-the-item-left-in-your-cart-and.jpeg'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/hey-you-forget-something-puma.jpeg"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/hey-you-forget-something-puma.jpeg'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/Screenshot.png"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    "https://raw.githubusercontent.com/retainful/site-images/master/templates/personal-wear/Screenshot.png"
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

export default PersonalWearTemplate
