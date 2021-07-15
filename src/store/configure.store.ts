import { configureStore } from '@reduxjs/toolkit';
import MeSlice from './slices/me.slice';

export const store = configureStore({
    reducer: {
        meStore: MeSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>