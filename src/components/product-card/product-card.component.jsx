import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { Price, ProductCardFooter, ProductCartContainer, Title } from "./product-card.styles";

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store-reduxcers/cart/cart.selector";
import { addItemToCart } from "../../store-reduxcers/cart/cart.action";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const addProductToCart = () =>
        dispatch(addItemToCart(cartItems,product));

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name} />
            <ProductCardFooter>
                <Title>{name}</Title>
                <Price>${price}</Price>
            </ProductCardFooter>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </ProductCartContainer>
    );
}


export default ProductCard;
