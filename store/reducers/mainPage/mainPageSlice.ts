import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EAsync } from '../../../enum/EAsync';
import { CroppedSmartphoneType } from '../../../models/smartphone';

interface MainPageState {
	mainScreen: {
		mainScreenSmartphones: CroppedSmartphoneType[];
		activeSmartphoneIndex: number | null;
	};
}

const initialState: MainPageState = {
	mainScreen: {
		mainScreenSmartphones: [],
		activeSmartphoneIndex: null
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
