import './checkout-item.styles';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
    Arrow,
    CheckoutItemContainer,
    CurrentQuantityValue,
    ImageContainer, Name, Price,
    Quantity,
    RemoveBtn,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const {
        clearItemFromCart,
        addItemToCart,
        removeItemFromCart
    } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    const addItemHandler = () => addItemToCart(cartItem);

    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <CurrentQuantityValue>{quantity}</CurrentQuantityValue>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveBtn onClick={clearItemHandler}>
                &#10005;
            </RemoveBtn>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;
