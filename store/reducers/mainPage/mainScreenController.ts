import { AppDispatch } from '../../store';
import { MAIN_SCREEN_SLIDER_ITEMS_COUNT } from '../../../constants/mainPage';
import { mainPageSlice } from './mainPageSlice';

class MainScreenController {
	public setActiveSmartphoneForSlider = (
		dispatch: AppDispatch,
		smartphoneIndex: number
	): void => {
		if (smartphoneIndex < 0 || smartphoneIndex > MAIN_SCREEN_SLIDER_ITEMS_COUNT - 1) {
			console.error('MainScreenController - setActiveSmartphoneForSlider invariant error');
			return;
		}
		dispatch(mainPageSlice.actions.setActiveSmartphoneForSlider(smartphoneIndex));
	};
}

export const mainScreenController = new MainScreenController();
