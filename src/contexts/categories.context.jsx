import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    /*
    useEffect(() =>
        addCollectionAndDocs('categories', SHOP_DATA)
    , []);
     */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs('categories');
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>;
}
