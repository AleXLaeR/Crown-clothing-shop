import {Fragment, useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import './category.styles';

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryContainer, CategoryName} from "./category.styles";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

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
