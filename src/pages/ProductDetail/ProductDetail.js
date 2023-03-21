import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../common/Components/Atom/ProductItem/ProductItem";
import { getProductDetails } from "../../redux/actions/action";

 function ProductDetail(props) {
    const { id } = useParams();
    useEffect(()=>{
        fetch('http://localhost:3000/products/'+id).then(response => response.json()).then((res) => {
            props.setProductDetails(res);
        })
    },
    []);    
    return (
        <Container>
            <Row>
                {
                    props.productDetails && 
                    <ProductItem isProductDetails={true} product={props.productDetails}></ProductItem>
                }
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        productDetails: state.productFeatures.productDetails
    }
}

const mapDispatchToProps =( dispatch) =>{
    return {
        setProductDetails: (payload) => dispatch(getProductDetails(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)