import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { THERAPIES } from '../../app/shared/oldData/THERAPIES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageUrl';

export const fetchTherapies = createAsyncThunk(
    'therapies/fetchTherapies',
    async () => {
        const response = await fetch(baseUrl + 'therapies');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    therapiesArray: [],
    isLoading: true,
    errMsg: ''
};

const therapiesSlice = createSlice({
    name: 'therapies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTherapies.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchTherapies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.therapiesArray = mapImageURL(action.payload);
            console.log("new array: ", state.therapiesArray)
        },
        [fetchTherapies.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const therapiesReducer = therapiesSlice.reducer;

export const selectAllTherapies = (state) => {
    return state.therapies.therapiesArray;
}