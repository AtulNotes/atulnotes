import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme')
            ? localStorage.getItem('starlight-theme')
            : window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light'
                : 'dark',
    },
    reducers: {
        toggletheme: (state, action) => {
            
            state.currentTheme = action.payload;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('starlight-theme', action.payload);
            }
        },
    },
});

export const { toggletheme } = themeSlice.actions;

export default themeSlice.reducer;