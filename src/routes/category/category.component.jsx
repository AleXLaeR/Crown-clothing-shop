import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import ProductCard from "../../components/product-card/product-card.component";
import {CategoryContainer, CategoryName} from "./category.styles";
import {useSelector} from "react-redux";
import { selectCategoriesMap } from "../../store-reduxcers/categories/category.selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryName>{category.toUpperCase()}</CategoryName>
            <hr />
            <CategoryContainer>
                {
                    products && products.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;
