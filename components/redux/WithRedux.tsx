import React from "react";
import {Provider} from "react-redux";
import {setupStore} from "../../store/store";

interface WithReduxProps {
    preloadedState?: any;
}

export const WithRedux: React.FC<WithReduxProps> = ({children, preloadedState}) => {
    let reduxStore = setupStore();
    if (preloadedState && reduxStore) {
        reduxStore = setupStore({
            ...reduxStore.getState(),
            ...preloadedState
        })
    }

    return <Provider store={reduxStore}>{children}</Provider>
}
