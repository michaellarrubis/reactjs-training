import axios from 'axios';
import { SET_JOKE } from './jokeTypes';

export function setJoke(data){
    return { type: SET_JOKE, payload: data }
}

export function getJoke(category){
    return async function(dispatch) {
        const { data } = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`);
        dispatch(setJoke(data.value));
    }
}