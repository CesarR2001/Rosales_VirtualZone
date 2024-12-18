import React from "react";
import { useCart } from "../context/CartContext";
import EmpyCart from "./EmpyCart";
import CartList from "./CartList";


const  CartView =() => {
    const {cart} = useCart()
    return(
        <div className="cart-container">
            {!cart.length ? <EmpyCart/> 
            : <div>
                <h2 className="cart-title">Tu carrito</h2>
                <CartList/>
            </div>
        }
        </div>
    )
}

export default CartView