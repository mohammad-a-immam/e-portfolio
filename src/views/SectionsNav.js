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


export const SectionNav = () => {
    const MoreItemToggle = React.forwardRef(({ onClick, parentClassname }, ref) => (
        <a
            ref={ref}
            className={classNames('btn btn-icon btn-icon-only', {
                'btn-foreground mt-2': parentClassname.indexOf('nav-tabs-title') === -1,
                'btn-background pt-0 bg-transparent pe-0': parentClassname.indexOf('nav-tabs-title') > -1,
            })}
            href="#/"
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <CsLineIcons icon="more-horizontal" size="20" />
        </a>
    ));

    MoreItemToggle.displayName = 'MoreItemToggle';
    const ResponsiveNav = React.forwardRef(({ className, children }, ref) => {
        const innerRef = React.createRef();
        const [collapseIndex, setCollapseIndex] = useState(children.length);
        const [childSteps, setChildSteps] = useState([]);
        const { width } = useWindowSize();

        const setSteps = () => {
            const steps = [];
            const currentChildren = innerRef.current.children;
            let totalWidth = 0;
            for (let i = 0; i < currentChildren.length; i += 1) {
                totalWidth += currentChildren[i].clientWidth;
                steps.push(totalWidth);
            }
            setChildSteps(steps);
        };
        const checkCollapseIndex = () => {
            const navWidth = innerRef.current.clientWidth;
            let checkedCollapseIndex = childSteps.filter((x) => x < navWidth).length;
            if (checkedCollapseIndex < children.length) {
                checkedCollapseIndex = childSteps.filter((x) => x < navWidth - 50).length;
            }
            if (checkedCollapseIndex !== collapseIndex) {
                setCollapseIndex(checkedCollapseIndex);
            }
        };
        useEffect(() => {
            setSteps();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
            if (width && childSteps.length > 0) {
                checkCollapseIndex();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [width]);

        return (
            <div ref={innerRef} className={className}>
                {children.slice(0, collapseIndex)}
                {collapseIndex !== children.length && (
                    <Dropdown className={classNames('nav-item ms-auto pe-0')} alignRight>
                        <Dropdown.Toggle as={MoreItemToggle} parentClassname={className} />
                        <Dropdown.Menu>{children.slice(collapseIndex, children.length)}</Dropdown.Menu>
                    </Dropdown>
                )}
            </div>
        );
    });

    return (
        <Card body className="mb-3">
            <Tab.Container defaultActiveKey="First">
                <Card.Header className="border-0 pb-0">
                    <Nav className="nav-tabs-line" variant="tabs" activeKey="First" as={ResponsiveNav}>
                        <Nav.Item>
                            <Nav.Link eventKey="First">First</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Second">Second</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Third">Third</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Fourth" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Fifth">Fifth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Sixth">Sixth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Seventh">Seventh</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Eighth">Eighth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Ninth">Ninth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Tenth">Tenth</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Tab.Content>
                        <Tab.Pane eventKey="First">
                            <Card.Title>First Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Second">
                            <Card.Title>Second Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Third">
                            <Card.Title>Third Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Fourth">
                            <Card.Title>Fourth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Fifth">
                            <Card.Title>Fifth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Sixth">
                            <Card.Title>Sixth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Seventh">
                            <Card.Title>Seventh Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Eighth">
                            <Card.Title>Eighth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Ninth">
                            <Card.Title>Ninth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tenth">
                            <Card.Title>Tenth Title</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional
                                content.</Card.Text>
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Tab.Container>
        </Card>
    )
}