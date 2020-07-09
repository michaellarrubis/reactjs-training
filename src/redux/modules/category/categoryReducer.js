import { SET_CATEGORIES } from './categoryTypes';

const initialState = {
    categories: []
};

const categoryReducer = (state = initialState, action) => { 
    switch(action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};

export default categoryReducer;