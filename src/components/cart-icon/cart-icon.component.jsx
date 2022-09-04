import { CartIconContainer, CartItemCount, ShoppingIcon } from "./cart-icon.styles";

import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store-reduxcers/cart/cart.selector";
import { setIsCartOpen } from "../../store-reduxcers/cart/cart.action";

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();

    const toggleIsCartOpen = () =>
        dispatch(setIsCartOpen(!isCartOpen));

    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
          <ShoppingIcon className='shopping-icon' />
          <CartItemCount>{cartCount}</CartItemCount>
      </CartIconContainer>
    );
}

export default CartIcon;
