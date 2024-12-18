import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
    return (
    <div className="cart-item">
        <img src={prod.img} alt={prod.name} className="cart-item-img" />
        <span className="cart-item-name">{prod.name}</span>
        <span className="cart-item-quantity">{prod.cantidad}</span>
        <span className="cart-item-price">${prod.price},00</span>
        <span className="cart-item-final-price">Precio final:${prod.cantidad * prod.price},00</span>
        <button cclassName="cart-item-remove" onClick={()=> removeItem(prod.id)}>X</button>
    </div>
    )
}

export default CartItem