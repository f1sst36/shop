import {AppDispatch} from "../../../store";
import {MAIN_SCREEN_SLIDER_ITEMS_COUNT} from "../../../../constants/mainPage";
import {mainScreenSlice} from "./mainScreenSlice";

class MainScreenController {
    // TODO - из-за getStaticProps у главной страницы клиентская логика получения телефонов вероятно не нужна (а может и нужна)
    // public getSmartphonesForMainScreen = (dispatch: AppDispatch): void => {
    //     dispatch(mainScreenSlice.actions.fetchingMainScreenSmartphones());
    //     setTimeout(() => {
    //         dispatch(mainScreenSlice.actions.receivedMainScreenSmartphones({
    //             loadingState: EAsync.SUCCESS,
    //             smartphones: smartphonesForMainScreen
    //         }));
    //     }, 3000);
    // }
    public setActiveSmartphoneForSlider = (dispatch: AppDispatch, smartphoneIndex: number): void => {
        if (smartphoneIndex < 0 || smartphoneIndex > MAIN_SCREEN_SLIDER_ITEMS_COUNT - 1) {
            console.info('MainScreenController - setActiveSmartphoneForSlider invariant error');
            return;
        }
        dispatch(mainScreenSlice.actions.setActiveSmartphoneForSlider(smartphoneIndex));
    }
}

export const mainScreenController = new MainScreenController();