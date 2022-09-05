import React, {useContext} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {DataContext} from "../data/DataProvider";

export const Profile = () => {
    const data = useContext(DataContext);
    return (
        <Col xs="12" className="m-auto">
            {/*<Card >*/}
                <Row className="g-0">
                    <Col xs="5" md={4} className="text-center p-2 h-100">
                        {/*<img src={data.profile?.picture} className="rounded profile-image" alt="card image"/>*/}
                        <img className="rounded-circle z-depth-2 max-w-100 sw-md-15" alt="100x100"
                             src={data.profile?.picture}
                             data-holder-rendered="true"/>
                    </Col>
                    <Col xs={7} md={8} className="p-2 pb-0">
                        <Card.Title>
                            <h3 className={"main-title fw-bolder text-dark"} style={{fontSize:"1.15 rem"}}>
                                {data.profile?.name}
                            </h3>
                            <div className="border-bottom" style={{fontSize:"0.75rem"}}>{data.profile?.title}</div>
                        </Card.Title>
                        <Card.Text className="m-0 d-flex">
                            {data.profile?.links?.map((item)=>
                                <a href={item.link} target="_blank">
                                    <i className={"me-3 text-dark icon-20 "+item.bootstrap_icon} />
                                </a>
                            )}
                        </Card.Text>
                        <div className="g-0 d-none d-md-inline">


                            <Card.Text class="m-0">
                                {data.profile.emails?.map((item,index)=>
                                    <><a  className="underline-link  " href={"mailto:"+item}>
                                        {item}</a>&nbsp; | </>
                                )}

                            </Card.Text>


                            <Card.Text className="mb-1 d-flex text-muted">
                                {data.profile?.description}
                            </Card.Text>
                        </div>
                    </Col>
                    <Col xs={12} className="d-md-none p-2">

                        {/*<Card.Title className="d-flex ">{data.profile?.name}</Card.Title>*/}


                        <Card.Text class="">
                            {data.profile.emails?.map((item)=>
                                <a href={"mailto:"+item}>{item+" | "}</a>
                            )}

                        </Card.Text>


                        <Card.Text className="mb-1 d-flex text-muted">
                            {data.profile?.description}
                        </Card.Text>
                    </Col>

                </Row>
            {/*</Card>*/}
        </Col>
    )
}