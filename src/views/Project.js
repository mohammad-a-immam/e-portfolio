import React, {useContext} from 'react'
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import CarouselGallery from "../components/carousel/CarouselGallery";
import {DataContext} from "../data/DataProvider";
import {useParams} from "react-router-dom";

export const Project = () => {
    const params = useParams();
    const data = useContext(DataContext);
    let item = data?.projects.past.find(x=>x.id == params.id);
    if(item == null){
        item = data?.projects.future.find(x=>x.id == params.id);
    }

    if(!item)
        return (<div>Error!</div>);

    return (
        <section className="scroll-section" id="gallery">
            <div className="mt-0">
                <a href="/" className={"btn btn-link"}>Home</a>
                <a href="/experience" className={"btn btn-link"}>Projects</a>
            </div>
            <Row>
                <Col xs={12} md={8} className="m-auto mt-0">
                    <h3 className="small-title mb-0">{item?.name}</h3>
                    <div class={"text-muted fs-1 mb-2"}>
                        {item.description}
                    </div>
                    <CarouselGallery
                        galleryItems={item.images}/>
                </Col>
                <Col xs={12} md={8} className="m-auto">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Details: {item.details}
                            </Card.Text>
                            Project Highlights:
                            {
                                item.highlights?.map(hItem=>
                                    <Badge className="me-1" bg="tertiary">{hItem.name}</Badge>
                                )
                            }
                             <br/>
                            Hosting: <br/>
                            Repository: Private Repository
                            <hr/>
                            {item.demo?
                                <Row>
                                    <Col>
                                        <a target="_blank" href={item.demo} className="btn btn-primary btn-sm">Demo</a>
                                    </Col>
                                </Row>:<></>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </section>
    )
}