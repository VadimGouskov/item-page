import Filters from "../types/filters";

const TOGGLE_MALE = 'item-page/maleFilter/TOGGLE_MALE';
const TOGGLE_FEMALE = 'item-page/maleFilter/TOGGLE_FEMALE';
const TOGGLE_GENDERLESS = 'item-page/maleFilter/TOGGLE_GENDERLESS';
const TOGGLE_UNKNOWN = 'item-page/maleFilter/TOGGLE_UNKNOWN';


const filters = (state = {} as Filters, action: ReturnType<typeof toggleMaleFilter> ) => {
    switch(action.type){
        case TOGGLE_MALE:
            return {
                ...state, 
                gender: {
                    ...state.gender,
                    male: !state.gender.male,
                },
            }
        case TOGGLE_FEMALE:
            return {
                ...state,                
                gender: {
                    ...state.gender,
                    female: !state.gender.female,
                },
            }
        case TOGGLE_GENDERLESS:
            return {
                ...state,
                gender: {
                    ...state.gender,
                    genderless: !state.gender.genderless
                }
            }
        case TOGGLE_UNKNOWN:
            return {
                ...state, 
                gender: {
                    ...state.gender,
                    unknown: !state.gender.unknown,
                },
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

const toggleGenderlessFilter = () => ({
    type: TOGGLE_GENDERLESS
})

const toggleUnknownFilter = () => ({
    type: TOGGLE_UNKNOWN
})

export default filters;
export { toggleMaleFilter, toggleFemaleFilter, toggleUnknownFilter, toggleGenderlessFilter }