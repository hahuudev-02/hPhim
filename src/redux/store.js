import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const currentUser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: { currentUser, movies: moviesReducer, search: searchReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export let persistor = persistStore(store);
