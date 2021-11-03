import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarouselSmartphone, CroppedSmartphoneType } from '../../../models/smartphone';
import { Category } from '../../../models/category';

interface MainPageState {
	mainScreen: {
		mainScreenSmartphones: CroppedSmartphoneType[];
		activeSmartphoneIndex: number | null;
	};
	categories: Category[];
	carousel: {
		smartphones: CarouselSmartphone[];
	};
}

const initialState: MainPageState = {
	mainScreen: {
		mainScreenSmartphones: [],
		activeSmartphoneIndex: null
	},
	categories: [],
	carousel: {
		smartphones: []
	}
};

// В Slice находится исключительно логика по изменению состояния RootState(Store)
// Бизнес-логика лежит в Controller
export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		setActiveSmartphoneForSlider(state, action: PayloadAction<number>) {
			state.mainScreen.activeSmartphoneIndex = action.payload;
		}
	}
});
