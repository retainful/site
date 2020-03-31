import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class FurnitureInteriorAndDIYTemplate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="furniture-interior-and-diy">
        <h2 className="pb-3">Furniture, Interior & DIY</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/10-inspirational-abandoned-cart-email-designs.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/10-inspirational-abandoned-cart-email-designs.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/Screenshot-2.png"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/Screenshot-2.png'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/abandoned-cart-email.jpeg"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/abandoned-cart-email.jpeg'
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/we've-saved-your-order.png"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    "https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/we've-saved-your-order.png"
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
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/creo-piece.png"/>
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    "https://raw.githubusercontent.com/retainful/site-images/master/templates/furniture-interior-and-diy/creo-piece.png"
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

export default FurnitureInteriorAndDIYTemplate
