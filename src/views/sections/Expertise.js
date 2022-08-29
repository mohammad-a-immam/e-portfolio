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
                <Row>
                    <Col md={8}>
                        <div className="title-2 mb-1">Certifications</div>
                        <Row>
                            <Col xs={6} md={3} className=" hover-scale-up">
                                <Card className="shadow border-primary hover-border-primary">
                                    <img width={60} className="m-auto mt-1"
                                         src={"https://personalstorage01a.blob.core.windows.net/mportfolio-files/images/certifications/aws-certified-solutions-architect-associate.png"}/>
                                    <Card.Body class={"m-auto text-align-center"}>
                                        <div className="title-2">
                                            Microsoft Associate Temporary Hello More
                                        </div>
                                        <span className="text-muted">2022</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={3} className=" hover-scale-up">
                                <Card className="shadow border-primary hover-border-primary">
                                    <img width={60} className="m-auto mt-1"
                                         src={"https://personalstorage01a.blob.core.windows.net/mportfolio-files/images/certifications/aws-certified-solutions-architect-associate.png"}/>
                                    <Card.Body class={"m-auto text-align-center"}>
                                        <div className="title-2">
                                            Microsoft Associate Temporary Hello More
                                        </div>
                                        <span className="text-muted">2022</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={3} className=" hover-scale-up">
                                <Card className="shadow border-primary hover-border-primary">
                                    <img width={60} className="m-auto mt-1"
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
                    </Col>
                    <Col>
                        {/*Languages*/}
                        <div className="title-2 mb-1">Major Skillsets</div>
                        <Row>
                            <Col xs={4} className="">
                                <div className="hover-scale-down">
                                    <img className="m-auto mt-1 w-100"
                                         src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                    <div class={"m-auto text-align-center"}>
                                        <span className="text-muted">C#</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col md={6}>
                        {/*Database Management*/}
                        <div className="title-2 mb-1">Database Management</div>
                        <Row>
                            <Col xs={3} md={2} className="">
                                <div className="hover-scale-down">
                                    <img className="m-auto mt-1 w-100"
                                         src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                    <div className={"m-auto text-align-center"}>
                                        <span className="text-muted">C#</span>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="title-2 mb-1">Cloud Technologies</div>
                        <Row>
                            <Col xs={3} md={2} className="">
                                <Card className="opacity-75 hover-opacity-full">
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
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col md={6}>
                        {/*APIs*/}
                        <div className="title-2 mb-1">APIs and SDKs</div>
                        <Row className="g-1">
                            <Col xs={3} md={1} className="">

                                <Card className="bg-transparent shadow opacity-75 hover-opacity-full cursor-default">
                                    <img className="m-auto mt-1 w-100"
                                         src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                    <Card.Body class={"m-auto text-align-center"}>
                                        <span className="text-muted">C#</span>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        {/*Frameworks*/}
                        <div className="title-2 mb-1">Major Frameworks</div>
                        <Row className="g-1">
                            <Col xs={3} md={1} className="">
                                <Card className="bg-transparent shadow opacity-75 hover-opacity-full cursor-default">
                                    <img className="m-auto mt-1 w-100"
                                         src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                    <Card.Body class={"m-auto text-align-center"}>
                                        <span className="text-muted">C#</span>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Col>
                </Row>



                <hr/>

                {/*Frameworks*/}
                <div className="title-2 mb-1">Others</div>
                <Row className="g-1">
                    <Col xs={3} md={1} className="">
                            <Card className="bg-transparent shadow opacity-75 hover-opacity-full cursor-default">
                                <img className="m-auto mt-1 w-100"
                                     src={"https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"}/>
                                <Card.Body class={"m-auto text-align-center"}>
                                    <span className="text-muted">C#</span>
                                </Card.Body>
                            </Card>

                    </Col>
                </Row>
                <hr/>
            </section>
        </Tab.Pane>

    )
}