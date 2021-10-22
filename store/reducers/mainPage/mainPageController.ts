import {AppDispatch} from "../../store";
import {mainPageSlice} from "./mainPageSlice";
import {EAsync} from "../../../enum/EAsync";

// TODO - temp data
const items = [
    {
        id: 1,
        mainImage: '/static/images/mainPage/mainScreen/phones.png',
        name: 'name_1',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        id: 2,
        mainImage: '/static/images/mainPage/mainScreen/phones.png',
        name: 'name_2',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        id: 3,
        mainImage: '/static/images/mainPage/mainScreen/phones.png',
        name: 'name_3',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        id: 4,
        mainImage: '/static/images/mainPage/mainScreen/phones.png',
        name: 'name_4',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
]

class MainPageController {
    // TODO - из-за getStaticProps у главной страницы клиентская логика получения телефонов вероятно не нужна (а может и нужна)
    public getSmartphonesForMainScreen = (dispatch: AppDispatch): void => {
        dispatch(mainPageSlice.actions.fetchingMainScreenSmartphones());
        setTimeout(() => {
            dispatch(mainPageSlice.actions.receivedMainScreenSmartphones({
                loadingState: EAsync.SUCCESS,
                smartphones: items
            }));
        }, 3000);
    }
}

export const mainPageController = new MainPageController();