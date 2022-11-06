import { createAction, Action, ActionWithPayLoad } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./category.types";

import { getDocsFromCollection } from "../../utils/firebase/firebase.utils";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayLoad<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailure = ActionWithPayLoad<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, Error>;

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailure;

const fetchCategoriesStart = () : FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categories: Category[]) : FetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailure = (error: Error) : FetchCategoriesFailure =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);


export const fetchCategoriesStartAsync: () => (dispatch: Function) => Promise<void> = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const categories: any[] = await getDocsFromCollection('categories');
            dispatch(fetchCategoriesSuccess(categories));
        } catch (error: any) {
            dispatch(fetchCategoriesFailure(error));
        }
    }
}
