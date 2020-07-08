import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const { categoryName } = useParams();
    const [joke, setJoke] = useState('');

    useEffect(() => {
        handleLoadJoke(categoryName);
    }, [categoryName])

    const handleLoadJoke = async(category) => {
        setJoke('Loading . . .');
        const { data } = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`);
        setJoke(data.value);
    }

    return (
        <div className="category page">
            <p className="page-content">{joke}</p>
        </div>
    )
};

export default Category;