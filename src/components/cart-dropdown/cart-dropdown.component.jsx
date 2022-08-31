import './cart-dropdown.styles';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        setIsCartOpen(!isCartOpen);
        navigate('/checkout');
    }

    return (
      <CartDropdownContainer>
          <CartItems>
              {(cartItems.length) ? (
                  cartItems.map((cartItem) => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))
              ) : (
                  <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
          </CartItems>
          <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
      </CartDropdownContainer>
    );
}

export default CartDropdown;
