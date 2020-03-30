import React from 'react'
import Scrollspy from 'react-scrollspy'
import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import Col from '../components/column'
import Modal from '../components/modal'

import FeaturedTemplates from '../constants/templates/featuredTemplates'
import FashionTemplates from '../constants/templates/fashionTemplates'
import SportsTemplates from '../constants/templates/sportsTemplates'

class Templates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        modalImg: ''
      }
    }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

  loadImageModal = (Img) => {
      console.log(Img);
        this.setState({
          modalImg: Img
        });
      this.showModal();
    };

  render() {
    return (
      <Layout className="templates-list-wrapper">
        <Container>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <div>
              <img src={this.state.modalImg} className="img-responsive" />
            </div>
          </Modal>
          <div className="template-container">
            <Row className="my-2" className="">
              <Col size="3">
                <div className="aside-menu">
                  <h4 className="py-2">Industries</h4>
                  <ul>
                    <Scrollspy
                      items={[
                        'featured',
                        'fashion',
                        'sports',
                        'event-planning',
                        'everyday-life',
                        'groups-clubs-and-hobbies',
                      ]}
                      currentClassName="is-current"
                      offset="5"
                    >
                      <li>
                        <a href="#featured">Featured</a>
                      </li>
                      <li>
                        <a href="#fashion">Fashion</a>
                      </li>
                      <li>
                        <a href="#sports">Sports</a>
                      </li>
                    </Scrollspy>
                  </ul>
                </div>
              </Col>
              {/*Content Begins*/}
              <Col size="9">
                <FeaturedTemplates loadImageModal={this.loadImageModal} />
                <FashionTemplates loadImageModal={this.loadImageModal} />
                <SportsTemplates loadImageModal={this.loadImageModal} />
              </Col>
              {/*Content Ends*/}
            </Row>
          </div>
        </Container>
      </Layout>
    )
  }
}
export default Templates;
