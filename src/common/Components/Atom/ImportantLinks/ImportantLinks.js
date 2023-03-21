import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ImportantLink(props) {
    return (
        <Row>
            <Col md={12} className="important-links car-brands-footer-link-1">
                {
                    props.importantLinks.map((item, index) => {
                        return <li key={"col1_" + index}>
                            {item.url
                                ? <Link to={item.url}>{item.name}</Link>
                                : <a href="">{item.name}</a>
                            }
                        </li>
                    })
                }
            </Col>
        </Row>
    )
}