import { SET_JOKE } from './jokeTypes';

const initialState = {
    joke: null
};

const jokeReducer = (state = initialState, action) => { 
    switch(action.type) {
        case SET_JOKE:
            return {
                ...state,
                joke: action.payload
            }
        default:
            return state;
    }
};

export default jokeReducer;