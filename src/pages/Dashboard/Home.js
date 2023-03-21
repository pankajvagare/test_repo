import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeaturesInfo from "../../common/Components/Atom/FeaturesInfo/FeaturesInfo";
import './home.css';
import Button from 'react-bootstrap/Button';
import infoImage from '../../assets/info_image.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

export default function HomeComponent() {
    const [key, setKey] = useState('home');
    var informationText = [
        {
            "text": "Now get your tyres fitted by our expert technician through our mobile tyre fitment van. Our tyre fitment team is well trained and professional in their work. Avail our services now !",
            "icon": "",
            "title": "EXPERT TYRE FITTING"
        },
        {
            "text": "Wheel balancing—also known as tyre balancing—is the process of equalizing the weight of the combined tyre and wheel assembly so that it spins smoothly at high speed.",
            "icon": "",
            "title": "WHEEL BALANCING"
        },
        {
            "text": "When tyres are fitted to wheels at the point of sale, they are measured again on a balancing machine, and correction weights are applied to counteract their combined unbalance.",
            "icon": "",
            "title": "BALANCING WEIGHTS"
        },
        {
            "text": "It is our recommendation that when you purchase new tyres you buy valves as well.The most durable ones are reinforced metal valves,rubber valves, etc.",
            "icon": "",
            "title": "NEW VALVES"
        }
        ,
        {
            "text": "Alignment assures your tyres meet the road at the proper angle, your wheels are pointing straight and your tyres are centered in the wheel wells.",
            "icon": "",
            "title": "WHEEL ALIGNMENT"
        }
        ,
        {
            "text": "Filling your car's tyres with nitrogen will reduce air loss, boost fuel economy, reduce rolling resistance, and improve safety.",
            "icon": "",
            "title": "Nitrogen Inflation"
        }
    ];

    return (
        <React.Fragment>
            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Row style={{ padding: 0, margin: 0 }}>
                    <img style={{ padding: 0 }} src={infoImage}></img>
                </Row>
            </Container>
            <Container className="tabs-container">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Tares Size">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Tab>
                    <Tab eventKey="profile" title="Car Brands">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Tab>
                </Tabs>
            </Container>
            <Container className="know-more-container align-center" fluid>

                <Row>
                    <Col md={6} xs={6}>
                        <h3 className="get-tyres-container">
                            How to Get Tyres fitted
                            at your doorstep !
                            Know More..
                        </h3>
                    </Col>
                    <Col md={6} xs={6}>
                        <Button variant="light" className="align-center know-more-button"> Know More</Button>
                    </Col>
                </Row>
            </Container>
            <Container>

                <FeaturesInfo informationText={informationText}>
                </FeaturesInfo>
            </Container>
        </React.Fragment>
    )
}