import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getJoke } from '../redux/modules/joke/jokeAction';

const Category = () => {
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const joke = useSelector(state => state.joke.joke);

    useEffect(() => {
        dispatch(getJoke(categoryName));
    }, [dispatch, categoryName]);

    return (
        <div className="category page">
            <p className="page-content">{joke}</p>
        </div>
    )
};

export default Category;