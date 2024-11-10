import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '@/store/slices/Theme';

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
})

export default store