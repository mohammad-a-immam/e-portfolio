import React from 'react';

// import layout

import Main from "./views/Main";
import {Col, Container, Row} from "react-bootstrap";
import useLayout from "./hooks/useLayout";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {Project} from "./views/Project";

const App = () => {

    useLayout();
    return (
        <>
            {/*<main>*/}
            <Container className="pt-2 m-0 m-md-auto w-md-75" >
                <Row className="h-100 m-0 pb-5">
                    {/*<SidebarMenu />*/}
                    <Col className="h-100" id="contentArea">
                        <Switch>
                            <Route path="/projects/:id">
                                <Project/>
                            </Route>
                            <Route path="/:id?">
                                <Main/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>

            {/*</main>*/
            }
            {/*<Footer/>*/
            }
        </>
    )
};

export default App;
