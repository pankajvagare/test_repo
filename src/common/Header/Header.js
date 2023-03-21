import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import SubHeader from './SubHeader';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    const onSelectFn = (selectedKey) =>{
        navigate(selectedKey)
    }
    return (
        <Container fluid>
            <SubHeader></SubHeader>
            <Row>
                <Col md={4}>
                    <img src={logo}></img>
                </Col>

                <Col md={8}>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => onSelectFn(selectedKey)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"/productPage"}>
                            <Nav.Link eventKey="productPage"> Products </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Car Brands </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Cart  </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="link-4">
                                <Form.Control
                                    type="TEXT"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}