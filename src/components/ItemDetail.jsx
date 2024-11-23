import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos`)
    }
    return (
        <div className="product-detail-container">
        <div className="product-image-container">
            <img src={producto.img} alt={producto.name} className="product-image" />
        </div>
        <div className="product-info">
            <h1 className="product-name">{producto.name}</h1>
            <p className="product-description">{producto.description}</p>
            <p className="product-price">${producto.price}</p>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
    </div>
    )
}

export default ItemDetail


    