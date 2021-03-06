import React, { Component } from 'react'
import ProductItem from './Product-Item'

export default class Products extends Component {

    componentDidMount() {
        this.props.getAll("product")
    }

    render() {
        const productNode = this.props.product.map( (product) => {
        return (<ProductItem product={product} key={product.id} />)
        })

        return (
            <div className="product-container">
                <h2>Products</h2>
                <ul>{productNode}</ul>
            </div>
        )
    }
    }
