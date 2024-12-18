import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart} = useContext(CartContext)
    const onAdd = (cantidad) =>{
        setCompra(true)
        Swal.fire({
            position: "top",
            icon: "success",
            title: `Agregaste ${producto.name} al carrito`,
            showConfirmButton: false,
            timer: 1500
        });
        let cartItem = {
            name: producto.name,
            img: producto.img,
            price: producto.price,
            stock: producto.stock,
            id: producto.id
        }
        addToCart(cartItem,cantidad)
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
            {compra ? 
            <div>
                <Link className='btn btn-dark' to='/'> Seguir Comprando</Link>
                <Link className=' btn btn-dark'to='/cart' > Ir al carrito</Link>
            </div>
            : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
        </div>
    </div>
    )
}

export default ItemDetail


    