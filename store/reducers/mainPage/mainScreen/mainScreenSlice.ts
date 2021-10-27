import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EAsync} from "../../../../enum/EAsync";
import {CroppedSmartphoneType} from "../../../../models/smartphone";

interface MainScreenState {
    mainScreenSmartphones: CroppedSmartphoneType[];
    loadingState: EAsync;
    activeSmartphoneIndex: number | null;
}

const initialState: MainScreenState = {
    mainScreenSmartphones: [],
    loadingState: EAsync.IDLE,
    activeSmartphoneIndex: null,
}

export const mainScreenSlice = createSlice({
    name: 'mainScreen',
    initialState,
    reducers: {
        // TODO - клиентская логика запроса телефонов для главного экрана (походу не нужна)
        // fetchingMainScreenSmartphones(state) {
        //     state.loadingState = EAsync.PENDING;
        // },
        // receivedMainScreenSmartphones(state, action: PayloadAction<{ loadingState: EAsync, smartphones: croppedSmartphoneType }>) {
        //     state.loadingState = action.payload.loadingState;
        //     if (state.loadingState === EAsync.SUCCESS) {
        //         state.mainScreenSmartphones = action.payload.smartphones;
        //     }
        // },
        setActiveSmartphoneForSlider(state, action: PayloadAction<number>) {
            state.activeSmartphoneIndex = action.payload;
        }
    },
})