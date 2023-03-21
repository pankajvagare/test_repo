import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductItem from "../../common/Components/Atom/ProductItem/ProductItem";
import { getProductDetails, getProductList } from "../../redux/actions/action";

function Products(props) {

    useEffect(() => {
        fetch('http://localhost:3000/products').then(response => response.json()).then((res) => {
            props.setProductList(res);
        })
    }, [])

    return (<Container>
        <Row>
            {
                props.productList && props.productList.map((item) => {
                    return <ProductItem product={item}></ProductItem>
                })
            }
        </Row>
    </Container>)
}

const mapStateToProps = (state) => {
    return {
        productList: state.productFeatures.productList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductDetails: (payload) => dispatch(getProductDetails(payload)),
        setProductList: (payload) => dispatch(getProductList(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)