import React, {useContext} from 'react'
import {Accordion, Badge, Button, Card, Col, Row, Tab, useAccordionButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {DataContext} from "../../data/DataProvider";
import CsLineIcons from "../../cs-line-icons/CsLineIcons";


export const Experience = () => {
    const data = useContext(DataContext);

    function CustomAccordionToggle({children, eventKey}) {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
        });

        return (
            <Card.Body className="p-2" onClick={decoratedOnClick} role="button">
                <Row variant="link" className="list-item-heading p-0">
                    {children}
                </Row>
            </Card.Body>
        );
    }

    return (

        <Tab.Pane eventKey="experience">
            <section className="scroll-section" id="accordionCards">
                <Row className="g-1">
                    <Col xs={12} md={8}>
                        <Row>
                            <div className="mb-1 title-2">Featured Projects</div>
                            <Row>
                                {
                                    data?.projects.filter(x=>x.completed).map(item=>
                                        <Col md={4} className="h-auto">

                                            <a href={`/projects/${item.id}`}>
                                            <Card className="h-100 hover-scale-up hover-border-primary cursor-pointer">
                                                <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-20"
                                                          alt="card image"/>
                                                <Card.Body className={"p-1"}>
                                                    <div className="fw-bold">{item.name}</div>
                                                    <div className="fw-light fs-0 text-dark">{item.description}
                                                    </div>
                                                    {item.highlights?.map(hItem=>
                                                        <Badge className="m-1" bg={"primary"}>{hItem.name}</Badge>)}
                                                </Card.Body>
                                            </Card>

                                            </a>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Row>
                        <hr/>
                        <Row>
                            <div className="mb-1 title-2">Future Plans</div>
                            <Row style={{height: "40vh"}}>
                                {
                                    data?.projects.filter(x=>!x.completed).map(item=>
                                        <Col md={4} className="h-auto">

                                            <a href={`/projects/${item.id}`}>
                                                <Card className="h-100 hover-scale-up hover-border-primary cursor-pointer">
                                                    <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-20"
                                                              alt="card image"/>
                                                    <Card.Body className={"p-1"}>
                                                        <div className="fw-bold">{item.name}</div>
                                                        <div className="fw-light fs-0 text-dark">{item.description}
                                                        </div>
                                                        {item.highlights?.map(hItem=>
                                                            <Badge className="m-1" bg={"primary"}>{hItem.name}</Badge>)}
                                                    </Card.Body>
                                                </Card>

                                            </a>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Row>
                    </Col>

                    {/*Column Right*/}
                    <Col xs={12} md={4}>
                        <Row>
                            <div className="title-2 mb-1">Job History</div>
                            <Accordion className="mb-n2" defaultActiveKey="0">
                                {
                                    data.experience?.jobs?.map((item, index) =>
                                        <Card className={"d-flex mb-2 flex-grow-1 border-primary hover-scale-down"}>
                                            <CustomAccordionToggle eventKey={index + 1}>
                                                <Row>
                                                    <Col xs={3}>
                                                        {item.picture ?
                                                            <img src={item.picture} width={35} height={35}
                                                                 className="me-2"/> : <></>}
                                                    </Col>
                                                    <Col xs={9} md={9} className="align-self-end p-0">
                                                        <h6 className="fw-bold fs-1 p-0">{item.name}</h6>
                                                        <div className="mb-2 text-muted fs-0">
                                                            {item.from} - {item.to} <CsLineIcons icon="menu-dropdown"
                                                                                                 className="text-muted mx-3"
                                                                                                 size="10"/>
                                                        </div>
                                                    </Col>

                                                </Row>

                                            </CustomAccordionToggle>
                                            <Accordion.Collapse eventKey={index + 1}>
                                                <Card.Body className="pt-0 pre-line">
                                                    <Card.Text className={"text-muted"}>{item.title}</Card.Text>
                                                    <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                                                    {item.highlights?.map((hItem) =>
                                                        <Badge className="me-1" bg={"tertiary"}>{hItem}</Badge>
                                                    )}
                                                    <hr/>
                                                    <div>Attachments</div>
                                                    {item.attachments?.map((item) =>
                                                        <a className="btn btn-outline-primary me-2 btn-link btn-sm"
                                                           target="_blank" href={item.link}>{item.name}</a>
                                                    )}
                                                </Card.Body>
                                            </Accordion.Collapse>


                                        </Card>
                                    )
                                }
                            </Accordion>
                        </Row>
                        <hr/>
                        <Row className="    ">
                            <div>Snippets</div>
                            {data?.experience?.snippets?.map(item=>
                                <a href={item.link} className="text-dark">
                                    <Card className="mb-2 border-primary hover-border-primary hover-scale-up">

                                        <Row className="g-0 sh-9 p-card pt-0 pb-0">
                                            <Col xs="4" className="d-flex align-items-center justify-content-center">
                                                <div className="pe-card">
                                                    <img
                                                        src={item.picture}
                                                        width="60"/>
                                                </div>
                                            </Col>
                                            <Col xs="8" className="d-flex flex-column justify-content-center">
                                                <p className="mb-0 fw-bold" style={{fontSize: "x-small"}}>{item.name}</p>
                                                <p className="text-muted mb-0" style={{fontSize: "x-small"}}>{item.description}</p>
                                            </Col>
                                        </Row>

                                    </Card>
                                </a>)}
                        </Row>

                    </Col>
                </Row>
            </section>
        </Tab.Pane>

    )
}