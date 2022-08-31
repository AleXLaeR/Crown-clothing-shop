import { createContext, useState, useEffect } from "react";

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


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (totalPrice, cartItem) => totalPrice +
                cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
    };

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>;
}
