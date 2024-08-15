import { configureStore, createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
    name: 'email',
    initialState: {
        subjectA: '',
        subjectB: '',
        previewText: '',
    },
    reducers: {
        setSubjectA: (state, action) => {
            state.subjectA = action.payload;
        },
        setSubjectB: (state, action) => {
            state.subjectB = action.payload;
        },
        setPreviewText: (state, action) => {
            state.previewText = action.payload;
        },
    },
});

export const { setSubjectA, setSubjectB, setPreviewText } = emailSlice.actions;
export const store = configureStore({ reducer: { email: emailSlice.reducer } });
