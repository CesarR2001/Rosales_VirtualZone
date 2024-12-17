import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";
import { CartContext, useCart } from "../context/CartContext";

const CardWidgetReactIcon = ({counter}) => {
    //Primera forma de usar context
    const {cartQuantity}= useCart()
    return(
        <div>
            <TiShoppingCart fontSize={'2.5rem'} color="#015aff"/>
            {cartQuantity() > 0 && <Badge bg="primary"> {cartQuantity()}</Badge>}
        </div>
    )
}

export default CardWidgetReactIcon