import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';
import { therapiesReducer } from '../features/therapy/therapiesSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        therapies: therapiesReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([logger])
})