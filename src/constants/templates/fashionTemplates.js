import React, { Component } from 'react'
import Row from '../../components/row'
import Col from '../../components/column'

class fashionTemplates extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="mt-5" id="fashion">
        <h2 className="pb-3">Fashion</h2>
        <Row>
        <Col size="4">
        <div className="template-item">
            <div className="template-image">
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/salt-water-colours.png" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/salt-water-colours.png'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Fabletics.jpg" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Fabletics.jpg'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Sunski.jpg" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Sunski.jpg'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email-template-american-giant-1.png" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email-template-american-giant-1.png'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email-from-cath-kidston.png" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email-from-cath-kidston.png'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/asos-cart-abadonment-1.png" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/asos-cart-abadonment-1.png'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Bombas.jpg" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Bombas.jpg'
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
                <img className="img img-responsive"
                    src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/chubbies-abandoned-cart-email-2.png" />
            </div>
            <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
                this.props.loadImageModal(
                'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/chubbies-abandoned-cart-email-2.png'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/abandoned-cart-email.png'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/christopher-and-banks.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/christopher-and-banks.png'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/email-case-study-indochino-cart-recovery-email.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/email-case-study-indochino-cart-recovery-email.png'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/how-automation-can-take-your-email-to-the-next.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/how-automation-can-take-your-email-to-the-next.png'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/email-marketing-emaildesign-emailmarketing.jpeg" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/email-marketing-emaildesign-emailmarketing.jpeg'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/items-are-waiting-and-waiting-and-waiting-in.jpeg" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/items-are-waiting-and-waiting-and-waiting-in.jpeg'
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/long-time-no-see-see-what-we've-been-up-to.jpeg" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        "https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/long-time-no-see-see-what-we've-been-up-to.jpeg"
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/nordstom-subject-you're-so-close-these-items-are.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        "https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/nordstom-subject-you're-so-close-these-items-are.png"
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
        <img className="img img-responsive"
            src="https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Screenshot-4.png" />
    </div>
    <button className="btn btn-primary template-preview-btn" type="button" onClick={()=>
        this.props.loadImageModal(
        'https://raw.githubusercontent.com/retainful/site-images/master/templates/Fashion/Screenshot-4.png'
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

export default fashionTemplates
