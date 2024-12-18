import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
    
    const clearCart = () =>{
        Swal.fire({
            title: "¿Esta seguro de borrar todo el carrito?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `Cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
            clear()
            } else if (result.isDenied) {
            
            }
        });
    }
    return (
    <div className="cart-list-container">
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <span className="cart-total">Total a pagar: ${cartTotal()}</span>
        <div  className="cart-actions">
            <button className='btn btn-danger' onClick={clearCart}> Borrar Carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
    )
}

export default CartList