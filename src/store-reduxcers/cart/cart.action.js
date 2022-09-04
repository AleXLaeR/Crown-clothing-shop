import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolValue) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolValue);

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

const addCartItem = (prevCartItems, product) => {
    const existingCartItem = prevCartItems.find((item) =>
        item.id === product.id
    );

    if (!existingCartItem) {
        return [...prevCartItems, { ...product, quantity: 1 }];
    }
    return prevCartItems.map((item) =>
        (item.id === product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
    );
}

const removeCartItem = (prevCartItems, product) => {
    const existingCartItem = prevCartItems.find((item) =>
        item.id === product.id
    );

    if (existingCartItem.quantity === 1) {
        return prevCartItems.filter(
            (cartItem) => cartItem.id !== product.id
        );
    }
    return prevCartItems.map((item) =>
        (item.id === product.id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
}

const clearCartItem = (prevCartItems, product) => {
    return prevCartItems.filter(
        (cartItem) => cartItem.id !== product.id
    );
}
