import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {IS_CLIENT} from "../constants/client-server";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useCSTypedSelector = (serverSideState: RootState): RootState => {
    const clientData = useSelector<TypedUseSelectorHook<RootState>>(store => store);
    if (IS_CLIENT) return clientData as RootState;
    return serverSideState;
};