import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([logger])
})