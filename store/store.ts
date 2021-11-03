import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mainPageSlice } from './reducers/mainPage/mainPageSlice';
import { catalogSlice } from './reducers/catalog/catalogSlice';

const rootReducer = combineReducers({
	mainPageState: mainPageSlice.reducer,
	catalogState: catalogSlice.reducer
});

export const setupStore = (preloadedState?: any) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
