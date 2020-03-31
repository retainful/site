import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class SportsTemplates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="sports">
        <h2 className="pb-3">Sports</h2>
        <Row>
        <Col size="4">
        <div className="template-item">
          <div className="template-image">
            <img
              className="img img-responsive"
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/4wds-sca-email.jpeg"/>
              </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                "https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/4wds-sca-email.jpeg"
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/inner-workout.png"/>
              </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                "https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/inner-workout.png"
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/the-fit-commandments-llc.png "/>
              </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                "https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/the-fit-commandments-llc.png "
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/adidas-cart-abandonment-email.jpeg"/>
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/adidas-cart-abandonment-email.jpeg')
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/baker-ross-cart-abandonment-email-emailmarketing.png"
            />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/baker-ross-cart-abandonment-email-emailmarketing.png'
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/c236b6e8-ceff-46b5-8c70-bb9371f92e4f.png"
            />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/c236b6e8-ceff-46b5-8c70-bb9371f92e4f.png'
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/ca61af92-1f0f-4aaa-a7e5-047e02b1da3f.jpeg"    />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/ca61af92-1f0f-4aaa-a7e5-047e02b1da3f.jpeg'        )
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/cart-abandonment-email-from-franklin-sports.png"
            />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/cart-abandonment-email-from-franklin-sports.png'
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/cart-abandonment-email-from-ripcurl.png"
            />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/cart-abandonment-email-from-ripcurl.png'
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/e31d8440-772a-4243-b2c4-05b8fb9bccad.png"      />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/e31d8440-772a-4243-b2c4-05b8fb9bccad.png'        )
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/here's-smartpak's-shopping-cart-recovery-email.jpeg"      />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                "https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/here's-smartpak's-shopping-cart-recovery-email.jpeg"       )
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/hey-we’ve-still-got-your-stuff.jpeg"      />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/hey-we’ve-still-got-your-stuff.jpeg'        )
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/reebok-subject-line-you-left-something-in-your.jpeg"      />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/reebok-subject-line-you-left-something-in-your.jpeg'        )
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
              src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/ripcurl-cart-abandonment-email-emailmarketing.png"
            />
          </div>
          <button
            className="btn btn-primary template-preview-btn"
            type="button"
            onClick={() =>
              this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Sports/ripcurl-cart-abandonment-email-emailmarketing.png'
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

export default SportsTemplates
