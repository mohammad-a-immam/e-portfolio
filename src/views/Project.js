import React from 'react'
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import CarouselGallery from "../components/carousel/CarouselGallery";

export const Project = () => {
    return (
        <section className="scroll-section" id="gallery">
            <div className="mt-0">
                <a href="/" className={"btn btn-link"}>Home</a>
                <a href="/projects" className={"btn btn-link"}>Projects</a>
            </div>
            <Row>
                <Col xs={12} md={8} className="m-auto mt-0">
                    <h3 className="small-title mb-0">Project Name</h3>
                    <div class={"text-muted fs-1 mb-2"}>
                        Designed and Developped Gaiensville Regional Utilities' primary
                        crew availability management solution
                    </div>
                    <CarouselGallery/>
                </Col>
                <Col xs={12} md={8} className="m-auto">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Experience:
                            </Card.Text>
                            Tech Stack Informaion:
                            <Badge bg="success">.NET</Badge> <br/>
                            Hosting: <br/>
                            Repository: Private Repository
                            <hr/>
                            <Row>
                                <Col>
                                    <Button className="btn-sm">Demo</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </section>
    )
}