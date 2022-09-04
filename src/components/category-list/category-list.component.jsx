import CategoryItem from "../category-item/category-item.component";
import { CategoryListContainer } from "./category-list.styles";

const CategoryList = ({ categories }) => (
    <CategoryListContainer>
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </CategoryListContainer>
)

export default CategoryList;
