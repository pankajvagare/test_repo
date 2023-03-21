import { Col, Row } from "react-bootstrap";
import './FeaturesInfo.css'

export default function FeaturesInfo(props) {
    return (
        <Row>
            {
                props.informationText.map((item) => {
                    return (
                        <Col xs={12} lg={4} md={4}>
                            <div className="features-info">
                                <span className="feature-title"> {item.title} </span>
                                <div className="feature-text">
                                    {item.text}
                                </div>
                            </div>
                        </Col>
                    )
                })
            }

        </Row>
    )
}