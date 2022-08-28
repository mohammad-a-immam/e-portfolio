import React, {useContext} from 'react'
import {
    Accordion,
    Badge,
    Button,
    Card,
    CardImg,
    Col,
    OverlayTrigger,
    Row,
    Tab, Tooltip,
    useAccordionButton
} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {DataContext} from "../../data/DataProvider";


export const Expertise = () => {
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

        <Tab.Pane eventKey="expertise">
            <section className="scroll-section" id="accordionCards">
                <div className="title-2 mb-1">Certifications</div>
                <Row>
                    <Col xs={6} md={3} className=" hover-scale-up">
                        <Card className="shadow hover-border-primary">
                            <img width={100} className="m-auto mt-1"
                                 src={"https://personalstorage01a.blob.core.windows.net/mportfolio-files/images/certifications/aws-certified-solutions-architect-associate.png"}/>
                            <Card.Body class={"m-auto text-align-center"}>
                                <div className="title-2">
                                    Microsoft Associate Temporary Hello More
                                </div>
                                <span className="text-muted">2022</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>

                {/*Languages*/}
                <div className="title-2 mb-1">Major Skillsets</div>
                <Row>
                    <Col xs={4} md={2} className="hover-scale-up">
                        <div className="w-100">
                            <img className="m-auto mt-1 w-100"
                                 src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                            <div class={"m-auto text-align-center"}>
                                <span className="text-muted">C#</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
                {/*APIs*/}
                <div className="title-2 mb-1">Cloud Technologies</div>
                <Row>
                    <Col xs={3} md={2} className="">
                        <OverlayTrigger placement="top"
                                        overlay={<Tooltip id="tooltip-top" className="opacity-100">Tooltip on
                                            top.</Tooltip>}>
                            <div className="">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <div className={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </div>
                            </div>
                        </OverlayTrigger>

                    </Col>
                </Row>
                <hr/>
                {/*Database Management*/}
                <div className="title-2 mb-1">Database Management</div>
                <Row>
                    <Col xs={3} md={2} className="">
                            <div className="">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <div className={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </div>
                            </div>

                    </Col>
                </Row>

                <hr/>
                {/*APIs*/}
                <div className="title-2 mb-1">APIs and SDKs</div>
                <Row className="g-1">
                    <Col xs={3} md={1} className="">
                        <OverlayTrigger placement="top"
                                        overlay={<Tooltip id="tooltip-top" className="opacity-100">Tooltip on
                                            top.</Tooltip>}>
                            <Card className="shadow opacity-75 hover-opacity-full cursor-default">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <Card.Body class={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>

                    </Col>
                </Row>
                <hr/>
                {/*Frameworks*/}
                <div className="title-2 mb-1">Major Frameworks</div>
                <Row className="g-1">
                    <Col xs={3} md={1} className="">
                        <OverlayTrigger placement="top"
                                        overlay={<Tooltip id="tooltip-top" className="opacity-100">Tooltip on
                                            top.</Tooltip>}>
                            <Card className="shadow opacity-75 hover-opacity-full cursor-default">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <Card.Body class={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>

                    </Col>
                </Row>
                <hr/>

                {/*Frameworks*/}
                <div className="title-2 mb-1">Other Technologies</div>
                <Row className="g-1">
                    <Col xs={3} md={1} className="">
                        <OverlayTrigger placement="top"
                                        overlay={<Tooltip id="tooltip-top" className="opacity-100">Tooltip on
                                            top.</Tooltip>}>
                            <Card className="shadow opacity-75 hover-opacity-full cursor-default">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <Card.Body class={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </Card.Body>
                            </Card>
                        </OverlayTrigger>

                    </Col>
                </Row>
                <hr/>
            </section>
        </Tab.Pane>

    )
}