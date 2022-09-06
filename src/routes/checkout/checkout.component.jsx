import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store-reduxcers/cart/cart.selector";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>Product</HeaderBlock>
                <HeaderBlock>Name</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;
