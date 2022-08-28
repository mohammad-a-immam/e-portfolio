import React, {useContext} from 'react'
import {Accordion, Badge, Button, Card, Col, Row, Tab, useAccordionButton} from "react-bootstrap";
import * as PropTypes from "prop-types";
import {DataContext} from "../../data/DataProvider";


export const Education = () => {
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

        <Tab.Pane eventKey="education">
            <section className="scroll-section" id="accordionCards">
                <Accordion className="mb-n2" defaultActiveKey="0">
                    <Row>
                    {
                        data.education?.map((item, index) =>
                           <Col md={6}>
                               <Card className={"d-flex mb-2 flex-grow-1 border-" + item.color}>
                                   <CustomAccordionToggle eventKey={index + 1}>

                                       <Col xs={3} md={1}>
                                           {item.logo ?
                                               <img src={item.logo} width={35} height={35} className="me-2"/> : <></>}
                                       </Col>
                                       <Col className="align-self-end">
                                           <h6 className="fw-bold fs-1">{item.institution} - {item.title ?? +"-"}</h6>
                                       </Col>

                                       <Col xs={12} md={6} className="text-align-right d-none d-md-inline">
                                           <h6 className="title-font fs-0"> {item.from} - {item.to}</h6>

                                       </Col>

                                   </CustomAccordionToggle>
                                   <Accordion.Collapse eventKey={index + 1}>
                                       <Card.Body className="pt-0 pre-line">
                                           <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                                           {item.highlights?.map((hItem) =>
                                               <Badge className="me-1" bg={"tertiary"}>{hItem}</Badge>
                                           )}
                                           <hr/>
                                           <div>Attachments</div>
                                           {item.attachments?.map((item) =>
                                               <a className="btn btn-outline-primary me-2 btn-link btn-sm" target="_blank" href={item.link}>{item.name}</a>
                                           )}
                                       </Card.Body>
                                   </Accordion.Collapse>


                               </Card>
                           </Col>
                        )
                    }
                    </Row>
                </Accordion>
            </section>
        </Tab.Pane>

    )
}