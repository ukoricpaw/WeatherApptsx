import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CurrentWeatherSliceReducer from "./slices/CurrentWeatherSlice";

const rootReducer = combineReducers({
    CurrentWeatherSliceReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware ( {
        serializableCheck: false,
    }
    ) )
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore  = typeof store;
export type AppDispatch = AppStore['dispatch'];