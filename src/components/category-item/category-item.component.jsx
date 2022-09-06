import {
    BackgroundImage,
    CategoryBodyContainer,
    CategoryItemContainer
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;

    return (
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
    );
}

export default CategoryItem;
