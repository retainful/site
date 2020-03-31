import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class EducationTemplates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="education">
        <h2 className="pb-3">Education</h2>
        <Row>
          <Col size="4">
            <div className="template-item">
              <div className="template-image">
                <img
                  className="img img-responsive"
                  src="https://raw.githubusercontent.com/retainful/site-images/master/templates/education/australian-institute-of-accreditation.png"
                />
              </div>
              <button
                className="btn btn-primary template-preview-btn"
                type="button"
                onClick={() =>
                  this.props.loadImageModal(
                    'https://raw.githubusercontent.com/retainful/site-images/master/templates/education/australian-institute-of-accreditation.png'
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

export default EducationTemplates
