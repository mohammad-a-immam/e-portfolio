import React, {useContext, useEffect, useState} from 'react'
import {Badge, Button, Card, Col, Row, Tab} from "react-bootstrap";
import {DataContext} from "../../data/DataProvider";
import CsLineIcons from "../../cs-line-icons/CsLineIcons";
import {useLocation} from "react-router-dom";
import querystring from "querystring";
import axios from "axios";

export const Guestwall = () => {
    const data = useContext(DataContext);
    const [gitUser, setGitUser] = useState();
    const location = useLocation();
    const [newComment, setNewComment] = useState();
    const [loading, setLoading] = useState("SUBMIT");

    const client_id = process.env.REACT_APP_GITHUB_CLIENTID;
    const gitTokenHelper_URI = process.env.REACT_APP_GITHUB_TOKENHELPER_AZUREFUNCTIONURI;

    useEffect(() => {
        const code = location?.search ? querystring.parse(location.search.replace('?', ''))?.code : null;
        if (code != null) {
            axios.get(`${gitTokenHelper_URI}&gitcode=${code}`).then((res) => {
                const access_token = res.data?.access_token;
                if (access_token != null) {
                    axios.get('https://api.github.com/user', {
                        headers: {
                            'Accept': "application/vnd.github+json",
                            'Authorization': `token ${access_token}`
                        }
                    }).then(uRes => {
                        setGitUser(uRes.data);
                    })
                }
            })
        }
    }, [])

    function SubmitComment(){
        if(!newComment || !gitUser)
            return;
        const item = {
            id: gitUser.id.toString(),
            name: gitUser.name,
            picture: gitUser.avatar_url,
            comment: newComment,
            featured: false,
            link: gitUser.html_url,
            relationship: "TBD",
            createdAt: new Date(),
        }

        const cosmosDbWriter_URI = process.env.REACT_APP_COSMOSDB_COMMENTS_AZUREFUNCTIONURI;
        const databaseId = process.env.REACT_APP_COSMOSDB_DATABASEID;
        const containerId = process.env.REACT_APP_COSMOSDB_COMMENT_CONTAINERID;
        const cosmosConfig = {databaseId, containerId, item}

        setLoading("loading...")
        axios.post(cosmosDbWriter_URI,cosmosConfig).then(res=>{
            window.location.reload();
        }).catch(e=>setLoading("error.."));
    }


    return (
        <Tab.Pane eventKey="guestwall">
            <section className="scroll-section" id="guestwall">
                <Row className="mb-3">
                    <Col xs={6} md={6} className="m-auto text-align-center">
                        {
                            !client_id || client_id=="your_github_oauth_clientid"?
                            <></>:
                            gitUser ?
                                <Row>
                                    <Col xs={2}>
                                        <div className="sw-5 sh-5 mb-1 d-inline-block position-relative">
                                            <img src={gitUser.avatar_url} className="img-fluid rounded-xl"
                                                 alt={gitUser.name}/>
                                            <div className="text-truncate">{gitUser.name}</div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <textarea className="form-control"
                                                  placeholder="write something relevant about Mohammad Immam..." value={newComment} onChange={(e)=>setNewComment(e.target.value)}/>
                                    </Col>
                                    <Col xs={2}>
                                        <input type={"button"} className="btn btn-sm btn-primary" value={loading} onClick={SubmitComment}/>
                                    </Col>
                                </Row>
                                :
                                <a className="btn btn-dark btn-icon btn-icon-start mb-1"
                                   href={`https://github.com/login/oauth/authorize?client_id=${client_id}`}>
                                    <i className={"me-3 icon-20 bi bi-github text-light"}/>
                                    <span>Login to Comment</span>
                                </a>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="border-right">
                        <div className={"fw-bold"}>Featured</div>
                        <div style={{fontSize: "x-small"}} className="text-muted mb-3">What my professional acquintences
                            think of me
                        </div>

                        {data.comments?.filter(x => x.featured).sort((x,y)=>y.createdAt - x.createdAt).map(item =>
                            <div className="mb-2 card-content">
                                <Row className="g-2">

                                    <Col className="d-flex justify-content-end align-items-end content-container">
                                        <div
                                            className="bg-dark d-inline-block rounded-md p-2 text-white position-relative w-75">
                                            <a href={item.link} target="_blank">
                                                <div className="sw-5 sh-5 mb-1 d-inline-block position-relative">
                                                    <img src={item.picture} className="img-fluid rounded-xl"
                                                         alt={item.name}/>
                                                </div>
                                                <div
                                                    className="mb-1 mx-2 d-inline-block position-relative bottom-0">{item.name}</div>
                                                <Badge>{item.relationship}</Badge>
                                            </a>
                                            <div className="text small mb-2 mx-7">{item.comment}</div>
                                            <span className="text-muted opacity-75 b-2 s-2 mx-7 right"
                                                  style={{fontSize: "xx-small"}}>{item.createdAt}</span>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        )}
                    </Col>
                    <Col md={6} className="">
                        <div className={"fw-bold"}>Visitors' Reviews</div>
                        <div style={{fontSize: "x-small"}} className="text-muted mb-3">Sign into GitHub above and
                            leave a portion of you with me...
                        </div>

                        {data.comments?.filter(x => !x.featured).sort((x,y)=>y.createdAt - x.createdAt).map(item =>
                            <div className="mb-2 card-content">
                                <Row className="g-2">
                                    <Col className="d-flex content-container">
                                        <div
                                            className="bg-foreground shadow-deep d-inline-block rounded-md p-2 text-dark position-relative w-75">
                                            <a href={item.link} target="_blank">
                                                <div className="sw-5 sh-5 mb-1 d-inline-block position-relative">
                                                    <img src={item.picture} className="img-fluid rounded-xl"
                                                         alt={item.name}/>
                                                </div>
                                                <div
                                                    className="mb-1 mx-2 d-inline-block position-relative bottom-0">{item.name}</div>
                                            </a>
                                            <div className="text small mb-2 mx-7">{item.comment}</div>
                                            <span className="text-muted opacity-75 b-2 s-2 mx-7 left"
                                                  style={{fontSize: "xx-small"}}>{item.createdAt}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Col>
                </Row>
            </section>
        </Tab.Pane>
    )
}