import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ProductItem.css'

export default function ProductItem(props) {
    return (<>
        <Col md={3} lg={3} xs={12} className="product-container">
            <Link to={"/productPage/" + props.product.id}>
                <div className="product-thumb">
                    <img className="product-image" src={props.product.images[0]}></img>
                    <div> {props.product.title} </div>
                    <div> {props.product.description} </div>
                    <div> '$'{props.product.price} </div>
                   
                </div>
            </Link>
            {
                       props.isProductDetails && props.product.features &&
                        <React.Fragment>
                            <div> width :  {props.product.features.rim} </div>
                            <div> Speed Rating :  {props.product.features.sppedRating} </div>
                        </React.Fragment>
                    }

        </Col>
    </>)
}