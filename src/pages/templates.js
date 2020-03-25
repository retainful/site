import React from 'react'
import Scrollspy from 'react-scrollspy'
import ExampleImage from '../images/Puroexpress.png'
import Layout from "../components/layout"
import Container from '../components/container'
import Row from "../components/row"
import Column from "../components/column"
import Modal from "../components/modal"



class HomeFeatures extends React.Component {
render() {
    return (
        <Layout>
            <Container>
            <div className="template-container">
                <Row className="my-2" className="">
                    <Column size="3">
                        <div className="aside-menu">
                            <h4 className="py-2">Industries</h4>
                            <ul>
                                <Scrollspy items={['featured', 'content-production', 'creative', 'event-planning', 'everyday-life', 'groups-clubs-and-hobbies']} currentClassName="is-current" offset="5">
                                <li><a href="#featured">Featured</a></li>
                                <li><a href="#content-production">Content production</a></li>
                                <li><a href="#creative">Creative</a></li>
                                <li><a href="#event-planning">Event Planning</a></li>
                                <li><a href="#everyday-life">Everyday Life</a></li>
                                <li><a href="#groups-clubs-and-hobbies">Groups, Clubs & Hobbies</a></li>  
                                </Scrollspy>     
                            </ul>
                        </div>
                    </Column>
                    {/*Content Begins*/}
                    <Column size="9">
                        <section className="mt-5" id="featured">
                        <h2 className="pb-3">Featured</h2>
                        <Row className="my-2">
                            <Modal content='
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>'>
                                <img className="img img-responsive" src={ExampleImage}/>
                            </Modal>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                        <section className="mt-5" id="content-production">
                        <h2 className="pb-3">Content production</h2>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                        <section className="mt-5" id="creative">
                        <h2 className="pb-3">Creative</h2>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                        <section className="mt-5" id="event-planning">
                        <h2 className="pb-3">Event Planning</h2>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                        <section id="everyday-life">
                            <h2 className="pb-3">Everyday Life</h2>
                            <Row className="my-2" className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2" className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                        <section className="mt-5" id="groups-clubs-and-hobbies">
                            <h2 className="pb-3">Groups, Clubs & Hobbies</h2>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                            <Row className="my-2">
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                                <div className="col-md-3 card mx-1">
                                    <div className="card-body">
                                        <img className="img img-responsive" src={ExampleImage}/>
                                    </div>
                                </div>
                            </Row>
                        </section>
                    </Column>
                    {/*Content Ends*/}
                </Row>
                </div>
            </Container>
        </Layout>
    )
}
}
export default HomeFeatures
