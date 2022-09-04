import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

import {selectCartItems, selectIsCartOpen} from "../../store-reduxcers/cart/cart.selector";
import { setIsCartOpen } from "../../store-reduxcers/cart/cart.action";


const CartDropdown = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
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
