import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { getDocsFromCollection } from "../../utils/firebase/firebase.utils";

const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categories) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailure = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);


export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const categories = await getDocsFromCollection('categories');
            dispatch(fetchCategoriesSuccess(categories));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    }
}
