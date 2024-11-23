import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div className="product-card">
        <img className="product-img" src={product.img} alt={product.name} />
        <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
        </div>
    )
}

export default Item

