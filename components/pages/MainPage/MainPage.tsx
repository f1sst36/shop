import React from "react";
import {MainScreen} from "./MainScreen/MainScreen";
import {RootState} from "../../../store/store";
import {Carousel} from "./Carousel/Carousel";
import {AboutProduct} from "./AboutProduct/AboutProduct";

export const MainPage: React.FC<{ serverSideRootState: RootState }> = ({serverSideRootState}) => {
    return <>
        <MainScreen serverSideRootState={serverSideRootState}/>
        <AboutProduct/>
        <Carousel/>
    </>
}