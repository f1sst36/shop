import {AppDispatch} from "../../store";
import {MAIN_SCREEN_SLIDER_ITEMS_COUNT} from "../../../constants/mainPage";
import {mainPageSlice} from "./mainPageSlice";

class MainPageController {
    // TODO - из-за getStaticProps у главной страницы клиентская логика получения телефонов вероятно не нужна (а может и нужна)
    // public getSmartphonesForMainScreen = (dispatch: AppDispatch): void => {
    //     dispatch(mainPageSlice.actions.fetchingMainScreenSmartphones());
    //     setTimeout(() => {
    //         dispatch(mainPageSlice.actions.receivedMainScreenSmartphones({
    //             loadingState: EAsync.SUCCESS,
    //             smartphones: smartphonesForMainScreen
    //         }));
    //     }, 3000);
    // }
    public setActiveSmartphoneForSlider = (dispatch: AppDispatch, smartphoneIndex: number): void => {
        if (smartphoneIndex < 0 || smartphoneIndex > MAIN_SCREEN_SLIDER_ITEMS_COUNT - 1) {
            console.info('MainPageController - setActiveSmartphoneForSlider invariant error');
            return;
        }
        dispatch(mainPageSlice.actions.setActiveSmartphoneForSlider(smartphoneIndex));
    }
}

export const mainPageController = new MainPageController();