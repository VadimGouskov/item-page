import Filters from "../types/filters";

const TOGGLE_MALE = 'item-page/maleFilter/TOGGLE_MALE';
const TOGGLE_FEMALE = 'item-page/maleFilter/TOGGLE_FEMALE';
const TOGGLE_UNKNOWN = 'item-page/maleFilter/TOGGLE_UNKNOWN';


const filters = (state = {} as Filters, action: ReturnType<typeof toggleMaleFilter> ) => {
    switch(action.type){
        case TOGGLE_MALE:
            return {
                ...state, 
                male: !state.male,
            }
        case TOGGLE_FEMALE:
            return {
                ...state, 
                female: !state.female,
            }
        case TOGGLE_UNKNOWN:
            return {
                ...state, 
                unknown: !state.unknown,
            }
        default:
            return state;
    }
}
         
        
const toggleMaleFilter = () => ({
    type: TOGGLE_MALE
})

const toggleFemaleFilter = () => ({
    type: TOGGLE_FEMALE
})

const toggleUnknownFilter = () => ({
    type: TOGGLE_UNKNOWN
})

export default filters;
export { toggleMaleFilter, toggleFemaleFilter, toggleUnknownFilter }