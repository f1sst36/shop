import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EAsync} from "../../../enum/EAsync";
import {CroppedSmartphoneType} from "../../../models/smartphone";

interface MainPageState {
    mainScreen: {
        mainScreenSmartphones: CroppedSmartphoneType[];
        loadingState: EAsync;
        activeSmartphoneIndex: number | null;
    }
}

const initialState: MainPageState = {
    mainScreen: {
        mainScreenSmartphones: [],
        loadingState: EAsync.IDLE,
        activeSmartphoneIndex: null,
    }
}

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        // TODO - клиентская логика запроса телефонов для главного экрана (походу не нужна)
        // fetchingMainScreenSmartphones(state) {
        //     state.mainScreen.loadingState = EAsync.PENDING;
        // },
        // receivedMainScreenSmartphones(state, action: PayloadAction<{ loadingState: EAsync, smartphones: croppedSmartphoneType }>) {
        //     state.mainScreen.loadingState = action.payload.loadingState;
        //     if (state.mainScreen.loadingState === EAsync.SUCCESS) {
        //         state.mainScreen.mainScreenSmartphones = action.payload.smartphones;
        //     }
        // },
        setActiveSmartphoneForSlider(state, action: PayloadAction<number>) {
            state.mainScreen.activeSmartphoneIndex = action.payload;
        }
    },
})