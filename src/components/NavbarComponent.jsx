import CardWidgetReactIcon from "./CardWidgetReactIcon"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
    return (
        <nav className="navContainer">
            <NavLink className="logo" to='/'>Virtual Zone</NavLink>
            <NavLink className="aLink" to='/product/nuevos'> Juegos Nuevos</NavLink>
            <NavLink className="aLink" to='/product/ofertas'> Ofertas</NavLink>
            <NavLink className="aLink" to='/product/mas vendidos'> Mayores Ventas</NavLink>
            < CardWidgetReactIcon counter={15}/> 
            {/* este es un ejemplo de props */}
        </nav> 
    )

}
export default NavbarComponent