import { Fragment } from 'react';

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store-reduxcers/categories/category.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {
                (isLoading) ? (
                    <Spinner />
                ) : (
                    Object.keys(categoriesMap).map((title) => (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={categoriesMap[title]}
                        />
                    ))
                )
            }
        </Fragment>
    );
}

export default CategoriesPreview;


