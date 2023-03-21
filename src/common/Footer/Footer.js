import { Col, Container, Row } from "react-bootstrap";
import HeaderTitle from "../Components/Atom/HeaderTitlte/HeaderTitle";
import ImportantLink from "../Components/Atom/ImportantLinks/ImportantLinks";
import "./Footer.css";

export default function Footer() {
    var carBrands = [
        { name: "BWM" },
        { name: "Tata" },
        { name: "Honda" },
        { name: "Toyoto" },
        { name: "Maruti" },
        { name: "Chevrolet" },
        { name: "KIA" },
        { name: "Ford" },
        { name: "Hyundai" },
        { name: "Datsun" },
        { name: "Flat" },
    ]
    var tyreBrands = [
        { name: "Bridgestone" },
        { name: "Yokohama" },
        { name: "Michelin" },
        { name: "Continental" },
        { name: "Apollo" },
        { name: "GoodYear" },
        { name: "Ceat" },
        { name: "Yokohoma" },
        { name: "GoodYear" },
    ]

    var importantLinks = [
        {
            name: "About Us",
            url : "/aboutus"
        },
        {
            name: "Contact Us",
            url : "/contactus"
        }, {
            name: "Privacy Policy"
        }
        ,
        {
            name: "Terms and Conditions"
        },
        {
            name: "Order Refunds"
        },
        {
            name: "Our Blogs"
        },
        {
            name: "Contact Support"
        }
    ];
    return (
        <footer className="footer">
            <Container className="footer-container">
                <Row>
                    <Col lg={3} md={3} xs={6}>
                        <HeaderTitle title={"CAR BRANDS"}>
                        </HeaderTitle>
                        <Row>
                            <Col md={6} xs={12} className="car-brands-footer-link-1">
                                {
                                    carBrands.splice(0, 6).map((item, index) => {
                                        return <li key={"col1_" + index}> <a href="">{item.name}</a></li>
                                    })
                                }
                            </Col>
                            <Col md={6} xs={12} className="car-brands-footer-link-2">
                                {
                                    carBrands.map((item, index) => {
                                        return <li key={"col2_" + index}><a href="">{item.name}</a></li>
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} xs={6}>
                        <HeaderTitle title={"TYRE BRANDS"}>
                        </HeaderTitle>
                        <Row>
                            <Col md={6} className="car-brands-footer-link-1">
                                {
                                    tyreBrands.splice(0, 5).map((item, index) => {
                                        return <li key={"col1_" + index}> <a href="">{item.name}</a></li>
                                    })
                                }
                            </Col>
                            <Col md={6} className="car-brands-footer-link-2">
                                {
                                    tyreBrands.map((item, index) => {
                                        return <li key={"col2_" + index}><a href="">{item.name}</a></li>
                                    })
                                }
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={3} md={3} sm={6}>
                        <HeaderTitle title={"IMPORTANT LINKS"}>
                        </HeaderTitle>
                         <ImportantLink importantLinks={importantLinks}></ImportantLink>
                    </Col>
                    <Col lg={3} md={3} sm={6}>
                        <HeaderTitle title={"SUPPPORT"}>
                        </HeaderTitle>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}