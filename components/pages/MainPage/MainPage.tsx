import React from "react";
import {MainScreen} from "./MainScreen/MainScreen";
import {RootState} from "../../../store/store";

export const MainPage: React.FC<{ serverSideRootState: RootState }> = ({serverSideRootState}) => {
    return <>
        <MainScreen serverSideRootState={serverSideRootState}/>
    </>
}