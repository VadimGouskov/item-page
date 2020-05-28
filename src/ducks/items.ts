import Item from "../types/item"
import { Items } from "../types/state"
import fakeApi, { getcharactersFromEpisodeRange } from "../tempApi"

const ADD = 'item-page/items/ADD'
const GET_PENDING = 'item-page/items/GET_PENDING' 
const GET_SUCCESS = 'item-page/items/GET_SUCCESS' 
const GET_FAILED = 'item-page/items/GET_FAILED' 

const items = (state = {} as Items, action: ReturnType <typeof addItem> &
                                            ReturnType <typeof loadItemsPending> &
                                            ReturnType <typeof loadItemsSuccess> &
                                            ReturnType <typeof loadItemsFailed> |
                                            undefined) => {
    switch (action?.type) {
        case ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action?.payload,
                ]
            }
        case GET_PENDING: 
            return {
                ...state,
                pending: true,
            }
        case GET_SUCCESS: 
            return {
                error: {},
                pending: false,
                items: action?.payload
            }
        case GET_FAILED: {
            return {
                ...state,
                error: action.error,
            }
        }
        default:
            return state
    }
}

const addItem = (item: Item) => ({
    type: ADD,
    payload: item,
})

const loadItemsPending = () => ({
    type: GET_PENDING
})

const loadItemsSuccess = (items: Item[]) => ({
    type: GET_SUCCESS,
    payload: items,
})

const loadItemsFailed = (error: any) => ({
    type: GET_FAILED,
    error: error 
})

const loadItems = () => {
    return async (dispatch: any) => {
        dispatch(loadItemsPending())
        try {
            // change this to a real world API
            const items = await fakeApi() as Item[];
            dispatch(loadItemsSuccess(items))
        } catch {
            dispatch(loadItemsFailed("loading items failed"))
        }
    }
}

const loadItemsForRange = (min: number, max: number) => {
    return async(dispatch: any) => {
        dispatch(loadItemsPending())
        try {
            const items = await getcharactersFromEpisodeRange(min, max);
            dispatch(loadItemsSuccess(items))
        } catch {
            dispatch(loadItemsFailed("loading items failed"))
        }
    }
}


export default items;
export { addItem, loadItems, loadItemsForRange}
