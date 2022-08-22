import React, {useContext} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {DataContext} from "../data/DataProvider";

export const Profile = ()=>{
    const data = useContext(DataContext);
    return (
        <Col xs="12" className="m-auto">
            <Card className="">
                <Row className="g-0 h-auto sh-md-25">
                    <Col sm="4" className="h-100">
                        <Card.Img src={data.profile?.picture} className="card-img-horizontal-sm" alt="card image" />
                    </Col>
                    <Col sm="8">
                        <Card.Body className="d-flex flex-column h-100">
                            <Card.Title>
                                <div style={{fontWeight:"bolder", fontFamily:"Tahoma", fontSize: "20px"}}>
                                    {data.profile?.name}
                                </div>
                            </Card.Title>
                            <Card.Text className="mb-1 d-flex">
                            </Card.Text>
                            <Card.Text className="text-medium border-bottom">Software Solutions Architect & Software Engineer</Card.Text>
                            {/*<Card.Title className="d-flex ">{data.profile?.name}</Card.Title>*/}
                            <Card.Text className="mb-1 d-flex">
                                Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes tootsie roll chocolate bar. Jujubes candy jelly-o topping.
                            </Card.Text>
                            <Card.Text className="mt-auto d-flex">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>


                </Row>
            </Card>
        </Col>
    )
}