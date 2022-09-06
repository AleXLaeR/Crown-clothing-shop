import { applyMiddleware, compose, createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);
