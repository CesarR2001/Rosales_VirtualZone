import CardWidgetReactIcon from "./CardWidgetReactIcon"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
    return (
        <nav className="navContainer">
            <NavLink className="logo" to='/'>Virtual Zone</NavLink>
            <NavLink className="aLink" to='/product/nuevos'> Juegos Nuevos</NavLink>
            <NavLink className="aLink" to='/product/ofertas'> Ofertas</NavLink>
            <NavLink className="aLink" to='/product/mas vendidos'> Mayores Ventas</NavLink>
            <NavLink to='/cart' style={{textDecorationLine:'none'}}>
            < CardWidgetReactIcon/> 
            </NavLink>
        </nav> 
    )

}
export default NavbarComponent