import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
        0
    )
);
