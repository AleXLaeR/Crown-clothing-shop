import {
    Arrow,
    CheckoutItemContainer,
    CurrentQuantityValue,
    ImageContainer, Name, Price,
    QuantityContainer,
    RemoveBtn,
} from "./checkout-item.styles";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store-reduxcers/cart/cart.selector";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart
} from "../../store-reduxcers/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));

    const addItemHandler = () =>
        dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <QuantityContainer>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <CurrentQuantityValue>{quantity}</CurrentQuantityValue>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </QuantityContainer>
            <Price>${price}</Price>
            <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;
