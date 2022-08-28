import React, {useEffect, useMemo, useState} from 'react';

// import layout
import Layout from 'layout/Layout';

import Main from "./views/Main";
import {Col, Container, Row} from "react-bootstrap";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";
import useLayout from "./hooks/useLayout";

const App = () => {

    useLayout();
    return (
<>
    {/*<main>*/}
        <Container className="pt-4 m-0 m-md-auto w-md-75" style={{minHeight: "120%"}}>
            <Row className="h-100 m-0">
                {/*<SidebarMenu />*/}
                <Col className="h-100" id="contentArea">
                    <Main/>
                </Col>
            </Row>

        </Container>

    {/*</main>*/}
    {/*<Footer/>*/}
</>
)
};

export default App;
