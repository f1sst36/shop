import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mainScreenSlice} from "./reducers/mainPage/mainScreen/mainScreenSlice";

const rootReducer = combineReducers({
    mainPageState: mainScreenSlice.reducer,
})

export const setupStore = (preloadedState?: any) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']