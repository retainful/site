import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class TravelTemplates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="travel">
        <h2 className="pb-3">Travel</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Travel/email-marketing-design-inspiration-browse.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/Travel/email-marketing-design-inspiration-browse.png'
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

export default TravelTemplates
