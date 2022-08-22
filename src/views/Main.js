import React, {useEffect, useState} from 'react';
import {Row, Col, Card, Nav, Tab, Dropdown} from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import {MENU_PLACEMENT, LAYOUT} from 'constants.js';
import {useLocation} from "react-router-dom";
import {Profile} from "./Profile";
import classNames from "classnames";
import {useWindowSize} from "../hooks/useWindowSize";
import CsLineIcons from "../cs-line-icons/CsLineIcons";
import {SectionNav} from "./SectionsNav";

const VerticalPage = () => {
    const title = 'Mohammad A Immam';
    const description = 'An empty page with a fluid vertical layout.';
    const activeSection = useLocation().hash;




    return (
        <>
            <HtmlHead title={title} description={description}/>
            <section className="scroll-section" id="profiles">
                <Row className="m-auto mb-3">
                    <Profile/>
                </Row>
            </section>


            <section className="scroll-section" id="responsiveTabs">
                <SectionNav/>
            </section>
        </>
    );
};

export default VerticalPage;
