import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class FoodTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="food-and-beverages">
        <h2 className="pb-3">Food and Beverages</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/chewy-sent-this-email-with-the-subject-line.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/chewy-sent-this-email-with-the-subject-line.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/Screenshot-1.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/Screenshot-1.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/digging-into-abandoned-cart-emails.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/digging-into-abandoned-cart-emails.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/Puroexpress.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/Food/Puroexpress.png'
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

export default FoodTemplate
