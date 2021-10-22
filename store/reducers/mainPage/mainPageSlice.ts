import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EAsync} from "../../../enum/EAsync";
import {Smartphone} from "../../../models/smartphone";

type croppedSmartphoneType = Pick<Smartphone, 'id' | 'name' | 'description' | 'mainImage'>[];

interface MainPageState {
    mainScreenSmartphones: croppedSmartphoneType;
    loadingState: EAsync;
}

const initialState: MainPageState = {
    mainScreenSmartphones: [],
    loadingState: EAsync.IDLE,
}

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        fetchingMainScreenSmartphones(state) {
            state.loadingState = EAsync.PENDING;
        },
        receivedMainScreenSmartphones(state, action: PayloadAction<{ loadingState: EAsync, smartphones: croppedSmartphoneType }>) {
            state.loadingState = action.payload.loadingState;
            if (state.loadingState === EAsync.SUCCESS) {
                state.mainScreenSmartphones = action.payload.smartphones;
            }
        },
    },
})