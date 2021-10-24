import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {IS_CLIENT} from "../constants/client-server";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useCSTypedSelector = (serverSideRootState: RootState): RootState => {
    const clientSideRootState = useSelector<TypedUseSelectorHook<RootState>>(store => store);
    if (IS_CLIENT) return clientSideRootState as RootState;
    return serverSideRootState;
};