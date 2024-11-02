import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "react-bootstrap";
const CardWidgetReactIcon = ({counter}) => {
    return(
        <div>
            <TiShoppingCart fontSize={'2.5rem'} color="#015aff"/>
            <Badge bg="primary"> {counter}</Badge>
        </div>
    )
}

export default CardWidgetReactIcon