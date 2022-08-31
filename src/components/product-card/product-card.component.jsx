import './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Price, ProductCardFooter, ProductCartContainer, Title } from "./product-card.styles";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name} />
            <ProductCardFooter>
                <Title>{name}</Title>
                <Price>${price}</Price>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}
                    onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </ProductCartContainer>
    );
}


export default ProductCard;
