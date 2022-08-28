import React, {useContext} from 'react'
import {Accordion, Badge, Button, Card, Col, Row, Tab} from "react-bootstrap";
import {DataContext} from "../../data/DataProvider";

export const Home = () => {
    const data = useContext(DataContext);

    return (

      <Tab.Pane eventKey="home">
          <section className="scroll-section" id="home">
              <Row>
                  <Col xs={12} md={4} className="order-md-2 mt-4 mt-md-0">
                      <Card.Title>Features</Card.Title>
                      {data.features?.map((item)=>
                          <Card className="mb-2 border-primary text-white hover-border-primary hover-scale-up">
                              <a href={item.link} target="_blank" className="text-dark">
                                  <Row className="g-0 sh-9 p-card pt-0 pb-0">
                                      <Col xs="4" className="d-flex align-items-center justify-content-center">
                                          <div className="pe-card">
                                              <img src={item.image} width="60"/>
                                          </div>
                                      </Col>
                                      <Col xs="8" className="d-flex flex-column justify-content-center">
                                          <p className="mb-0 fw-bold" style={{fontSize:"x-small"}}>{item.name}</p>
                                          <p className="text-muted mb-0" style={{fontSize:"x-small"}}>{item.description}</p>
                                      </Col>
                                  </Row>
                              </a>
                          </Card>
                      )}
                  </Col>

                  <Col xs={12} md={8}>
                      <Card className="mb-5 hover-scale-up">
                          <Card.Body>
                              <Card.Title>About</Card.Title>
                              <Card.Text>{data.profile?.about}</Card.Text>
                              <Button className="btn-dark" href={data.profile?.resume}target="_blank">Resume</Button>
                          </Card.Body>
                      </Card>

                      <Card className="mb-5 hover-scale-up">
                          <Card.Body>
                              <div>Current Employer: {data.experience?.find(x=>x.to == "present")?.institution}</div>
                              <div>Current City: {data.profile?.city}</div>
                              {data.profile?.birthday? <div>Birthday: {new Date(data.profile?.birthday).toDateString()}</div>:<></>}
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>
              <div>Featured Articles/Posts/Blogs</div>
              <Row>

              </Row>
          </section>
      </Tab.Pane>
  )
}