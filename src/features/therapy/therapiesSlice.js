import { createSlice } from '@reduxjs/toolkit';
import { THERAPIES } from '../../app/shared/THERAPIES';

const initialState = {
    therapiesArray: THERAPIES

};

const therapiesSlice = createSlice({
    name: 'therapies',
    initialState
});

export const therapiesReducer = therapiesSlice.reducer;

export const selectAllTherapies = (state) => {
    return state.therapies.therapiesArray;
}