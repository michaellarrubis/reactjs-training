import { GET_CATEGORIES } from './categoryTypes';

export function getCategories() {
    return { 
        type: GET_CATEGORIES,
        payload: [
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit",
            "fashion",
            "food",
            "history",
            "money",
            "movie",
            "music",
            "political",
            "religion",
            "science",
            "sport",
            "travel"
        ] };
}