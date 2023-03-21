import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";
import { SUB_HEADER_TEXT } from "../../constants/constants";
import './subHeader.css';
import { Link, useNavigate } from 'react-router-dom';

export default function SubHeader() {
    const navigate = useNavigate();

    const onSelectFn = (selectedKey) =>{
        navigate(selectedKey)
    }

    return <Row className={"sub-header-container"}>
        <Col md={10} >
            {SUB_HEADER_TEXT}
        </Col>
        <Col md={2}>
            <Button variant="light" onClick={()=>onSelectFn("login")}>Login</Button>{' '}
            <Button variant="light" onClick={()=>onSelectFn("register")}>Register</Button>{' '}
        </Col>
    </Row>
}