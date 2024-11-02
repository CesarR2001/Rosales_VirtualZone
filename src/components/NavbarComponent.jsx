import CardWidgetReactIcon from "./CardWidgetReactIcon"

const NavbarComponent = () => {
    return (
        <nav className="navContainer">
            <a className="logo">Virtual Zone</a>
            <a className="aLink"> Juegos</a>
            <a className="aLink"> Ofertas</a>
            <a className="aLink"> Novedades</a>
            < CardWidgetReactIcon counter={15}/> 
            {/* este es un ejemplo de props */}
        </nav> 
    )

}
export default NavbarComponent