import axios from 'axios';
import { SET_CATEGORIES } from './categoryTypes';

export function setCategories(data){
    return { type: SET_CATEGORIES, payload: data }
}

export function getCategories(){
    return async function(dispatch) {
        const { data } = await axios('https://api.chucknorris.io/jokes/categories');
        dispatch(setCategories(data));
    }
}