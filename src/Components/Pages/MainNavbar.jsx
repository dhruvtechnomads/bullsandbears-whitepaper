import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import { Link, useLocation } from "react-router-dom"
import "./css/MainNav.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router';

import Introduction from "./Intro/introduction";
import Message from "./Message";
import History from "./History";
import PassiveIncome from "./PassiveIncome";
import PLAN1 from "./Plan1";
import PLAN2 from "./Plan2";
import PLAN3 from "./Plan3";
import PLAN4 from "./Plan4";
import Payout from "./Payout";
import Phase1 from "./Phase1";
import PHASE2 from "./Phase2";
import PHASE3 from "./Phase3";
import Roadmap from "./Roadmap";
// import FAQ from "./FaQ";
const MainNavbar = () => {

    // const location = useLocation()
    // const { pathname } = location

    return (
        <>      



            {/*  */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="Introduction" >
                <div className="container-fluid ">
                    <Row>

                        <Col md={3} xl={2} sm={2} lg={3} className="apptoll_side_nav colBorder slideTab">
                            {/* <Nav variant="" className="flex-column "> */}
                                {/* <p className="intro text-uppercase"> Introduction</p> */}
                                <Nav variant="" className="flex-column ">

                                <Accordion defaultActiveKey="0" className="AccText">

                                    {/* <Accordion.Item eventKey="0"> */}
                                        {/* <Accordion.Header className=""> */}
                                         <Nav.Link eventKey="Introduction" href="#Introduction" className="AccText pb-3 text-uppercase">
                                            Introduction to Bull and Bears
                                        </Nav.Link>
                                        {/* </Accordion.Header> */}
                                    {/* </Accordion.Item> */}

                                </Accordion>

                                <Nav.Item>
                                    <Nav.Link eventKey="History" href="#History" className="AccText">
                                        A BIT OF HISTORY
                                    </Nav.Link>
                                </Nav.Item>

                                <Accordion defaultActiveKey="0">

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><Nav.Link eventKey="PassiveIncome" href="#PassiveIncome" className="AccText">
                                            PASSIVE INCOME
                                        </Nav.Link></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="SwappingLine">
                                                <Nav.Link eventKey="Plan1" href="#PLAN1" className="AccText">
                                                    PLAN 1
                                                </Nav.Link>
                                                <Nav.Link eventKey="Plan2" href="#PLAN2" className="AccText">
                                                    PLAN 2
                                                </Nav.Link>
                                                <Nav.Link eventKey="Plan3" href="#PLAN3" className="AccText">
                                                    PLAN 3
                                                </Nav.Link>
                                                <Nav.Link eventKey="Plan4" href="#PLAN4" className="AccText">
                                                    PLAN 4
                                                </Nav.Link>

                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className="btnBorSet">
                                            <Nav.Link eventKey="Payout" href="#PayoutPlan" className="AccText">
                                                PASSIVE INCOME PAYOUT PLAN
                                            </Nav.Link></Accordion.Header>
                                        <Accordion.Body>

                                            <div className="FundingLine">
                                                <Nav.Link eventKey="Phase1" href="#Phase1" className="AccText">
                                                    PHASE 1
                                                </Nav.Link>
                                                <Nav.Link eventKey="Phase2" href="#Phase2" className="AccText">
                                                    PHASE 2
                                                </Nav.Link>
                                                <Nav.Link eventKey="Phase3" href="#Phase3" className="AccText">
                                                    PHASE 3
                                                </Nav.Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Nav.Item>
                                    <Nav.Link eventKey="roadmap" href="#Roadmap" className="AccText">
                                        ROADMAP
                                    </Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="FAQ" href="#FAQ" className="AccText">
                                        FAQ
                                    </Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>



                        <Col md={7} xl={9} lg={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Introduction">
                                    <Introduction />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Message">
                                    <Message />
                                </Tab.Pane>
                                <Tab.Pane eventKey="History">
                                    <History />
                                </Tab.Pane>                               
                                <Tab.Pane eventKey="PassiveIncome">
                                    <PassiveIncome />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Plan1">
                                    <PLAN1 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Plan2">
                                    <PLAN2 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Plan3">
                                    <PLAN3 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Plan4">
                                    <PLAN4 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Payout">
                                    <Payout />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Phase1">
                                    <Phase1 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Phase2">
                                    <PHASE2 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Phase3">
                                    <PHASE3 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="roadmap">
                                    <Roadmap/>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="FAQ">
                                    <FAQ/>
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Col>

                    </Row>
                </div>
            </Tab.Container>


        </>
    );
};

export default MainNavbar;
